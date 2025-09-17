import mongoose from "mongoose";

const connectionDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected to the database');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw new Error('Database connection failed');
  }
};

export default connectionDb;
