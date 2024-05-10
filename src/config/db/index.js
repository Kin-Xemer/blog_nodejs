const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!")
  }
};
module.exports = { connect };