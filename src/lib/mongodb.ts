import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

function isTransientMongoError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error || "");
  return (
    message.includes("EAI_AGAIN") ||
    message.includes("MongoServerSelectionError") ||
    message.includes("MongoNetworkError")
  );
}

async function connectWithRetry(uri: string, opts: mongoose.ConnectOptions) {
  const maxAttempts = 2;
  let attempt = 0;

  while (attempt < maxAttempts) {
    try {
      return await mongoose.connect(uri, opts);
    } catch (error) {
      attempt += 1;

      if (!isTransientMongoError(error) || attempt >= maxAttempts) {
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
    }
  }

  throw new Error("Failed to establish MongoDB connection");
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 8000,
      socketTimeoutMS: 20000,
      family: 4,
    };

    cached.promise = connectWithRetry(MONGODB_URI!, opts).then((mongoose) => {
      return mongoose;
    }) as any;
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn!;
}

export default dbConnect;
