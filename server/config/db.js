import mongoose from "mongoose";

export const connectionString = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/sample';

export const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}