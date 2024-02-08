require("dotenv").config();

const Job = require("./models/Job");
const mockData = require("./mock-data.json");
const connectDB = require("./db/connect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Job.create(mockData);
    console.log("Success!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    console.log(1);
  }
};

start();
