const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
  } catch (err) {
    console.log("Error connecting to DB:", err.message);
    process.exit(1);
  }
};


module.exports = connectToDb;
