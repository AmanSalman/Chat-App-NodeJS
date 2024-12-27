// app.mjs - Express app setup

import express from "express";
import cors from "cors";
import path from "path";

// Initialize Express app
export const app = express();

// Enable CORS
app.use(cors());

// Serve static files from the "public" directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));
