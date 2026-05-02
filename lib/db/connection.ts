import mongoose from "mongoose";
import dns from "dns";

if (typeof window === "undefined") {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
}

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  console.error("MONGODB_URI environment variable is not defined");
}

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function connectDB(): Promise<void> {
  if (connection.isConnected) {
    console.log("Using existing Database Connection");
    return;
  }
  try {
    const db = await mongoose.connect(MONGODB_URI || "");
    connection.isConnected = db.connections[0].readyState;
    console.log("Established new Database Connection");
  } catch (error) {
    console.log("Database Connection Failed", error);
  }
}

export default connectDB;
