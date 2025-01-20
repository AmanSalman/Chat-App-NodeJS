# Group Chat Application

This is a simple group chat application using **Socket.IO**, **Express**, and **HTML/CSS**. The app allows users to enter their username, join a group chat, send and receive messages in real-time. The chat also features random avatar assignments for users.

## Features

- Real-time messaging using **Socket.IO**.
- Avatars are dynamically assigned.
- Responsive design that works well on both desktop and mobile.

## Technologies Used

- **HTML5** for structure.
- **CSS3** for styling (with animations and responsive design).
- **JavaScript** (with **Socket.IO**) for real-time chat functionality.
- **Express** for serving the application.

## Setup and Installation

### Prerequisites

Before running the application, ensure that you have **Node.js** installed. You can download it from [here](https://nodejs.org/).

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AmanSalman/Chat-App-NodeJS.git
   cd Chat-App-NodeJS
   ```
2. **Install Dependencies: Install the required dependencies for both the server and client**:
   ```bash
   npm install
   ```
3. **Start the Server: To run the application locally, use the following command**:
   ```bash
   nodemon src/server.mjs
   ```
4. **This will start the Express server, and the application will be accessible at**:
   ```bash
   http://localhost:3000
   ```
## Folder Structure
- **/public**: Contains the static files (HTML, CSS, and JavaScript files for the frontend).
- **/handlers**: Contains server-side socket logic.
- **app.mjs**: The Express app setup.
- **server.mjs**: The main entry point for the application that starts the server and initializes socket handling.

## Usage

1. Open the application in your browser at [http://localhost:3000](http://localhost:3000).
2. Enter a username and click **"Start Chat"**.
3. Once in the chat room, type a message in the input box and click **"Send"**.
4. Messages from all users will be displayed in the chat window.

[Real-Time-ChatApplication.webm](https://github.com/user-attachments/assets/3d9ffd9a-b197-4fe1-bd8b-bb2f0248c395)


