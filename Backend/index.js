import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

import path from 'path'
// Load environment variables
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

const URI = process.env.MONGODBURI;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true, // Corrected typo
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

// Connect to MongoDB
connectToMongoDB();



// defining routes
app.use("/book", bookRoute);

app.use('/user',userRoute);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
