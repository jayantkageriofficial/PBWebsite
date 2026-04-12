import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is not defined");
}

const cached = global as typeof global & {
  mongoose?: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

if (!cached.mongoose) {
  cached.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.mongoose!.conn) {
    console.info("Using cached MongoDB connection");
    return cached.mongoose!.conn;
  }

  if (!cached.mongoose!.promise)
    cached.mongoose!.promise = mongoose.connect(MONGODB_URI).then((m) => m);

  cached.mongoose!.conn = await cached.mongoose!.promise;

  console.info("Established new MongoDB connection");
  return cached.mongoose!.conn;
}

if (process.env.NEXT_RUNTIME === "nodejs") {
  connectDB().catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
}

export default connectDB;
