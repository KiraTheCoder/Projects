//Code to connect Express Application with MongoDB
const mongoose = require("mongoose");

const connectDB = async () => {
 try {
  await mongoose.connect(
   "mongodb://root:example@db:27017",
   { useNewUrlParser: true },
   { useUnifiedTopology: true }
  );
  console.log("MongoDB Connected!");
 } catch (error) {
  console.log(error.message);
  process.exit(1);
 }
};

module.exports = connectDB;