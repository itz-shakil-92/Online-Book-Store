import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import path from "path";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const URI = process.env.MONGODBURI;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    process.exit(1); // Exit if connection fails
  }
};

// Retry MongoDB connection on error
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Connect to MongoDB
connectToMongoDB();

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Serve static files (if any)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
