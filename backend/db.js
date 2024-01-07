const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://agshubhi2001:MZNiZRmcEYqJKvHc@db-task.yp2kelm.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;