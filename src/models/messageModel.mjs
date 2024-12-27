import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
  delivered: { type: Boolean, default: false },
});

export const Message = mongoose.model("Message", messageSchema);
