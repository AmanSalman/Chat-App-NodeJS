export function initializeSocket(io) {
  // Store connected users and their socket IDs
  const users = {};

  io.on("connection", (socket) => {
    console.log("A new user connected!");

    // Assign a username to the connected user
    socket.on("setUsername", ({ username, avatar, userColor }) => {
      users[username] = { socketId: socket.id, avatar, userColor };
      console.log(`User ${username} connected with ID ${socket.id}`);
      socket.emit("success", `Welcome, ${username}`);
    });

    // Handle sending private messages
    socket.on("privateMessage", ({ toUsername, message }) => {
      const recipient = users[toUsername]; // Get recipient's socket data

      if (recipient) {
        // Get sender's username from the users object
        const senderUsername = Object.keys(users).find(
          (key) => users[key].socketId === socket.id
        );

        // Send the message to the recipient
        io.to(recipient.socketId).emit("chatMessage", {
          from: senderUsername, // Use the correct sender username
          avatar: users[senderUsername]?.avatar || "",
          message,
          userColor: users[senderUsername]?.userColor || "#333",
        });
      } else {
        // Notify sender if the recipient is not available
        socket.emit("error", `User ${toUsername} is not available.`);
      }
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      const disconnectedUser = Object.keys(users).find(
        (key) => users[key].socketId === socket.id
      );
      delete users[disconnectedUser]; // Remove user from list
      console.log(`${disconnectedUser} disconnected`);
    });
  });
}
