import mongoose from "mongoose";

if (!process.env.MONGODB_URL) {
  throw new Error('MONGODB_URL environment variable is not defined');
}

export const config = mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));