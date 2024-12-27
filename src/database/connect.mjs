import mongoose from "mongoose";

export async function connectToDatabase() {
  try {
    await mongoose
      .connect(process.env.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,
      })
      .then(() => console.log("Connected to MongoDB"));
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}
