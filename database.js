const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect('mongodb+srv://kholoudoa2000:TPkdWHsP4Hq6NW8T@cluster0.vjoqf.mongodb.net/Day_1');
    console.log(`mongo connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error)
    }
  };

  module.exports = connectDB