// server.mjs - Main entry point for the chat application

import { createServer } from "http";
import { Server } from "socket.io";
import { app } from "./app.mjs";
import { initializeSocket } from "./handlers/socketHandler.mjs";

// Create HTTP server using Express app
const server = createServer(app);

// Configure Socket.IO with CORS settings
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins for now
    methods: ["GET", "POST"],
  },
});

// Initialize socket handling logic
initializeSocket(io);

// Start the server on the defined port
const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
