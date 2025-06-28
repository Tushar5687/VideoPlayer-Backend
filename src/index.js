
import mongoose from "mongoose";
// import express from "express";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// // Load environment variables from .env file
dotenv.config({
    path: './env'
});
connectDB()
// const app = express();

// (async () => {
//   try {
//     const dbUri = `${process.env.MONGODB_URI}/${DB_NAME}`;
//     await mongoose.connect(dbUri);
//     console.log("Database connected successfully");

//     // Handle express app-level errors
//     app.on("error", (error) => {
//       console.error("App-level ERROR: ", error);
//       throw error;
//     });

//     const PORT = process.env.PORT || 3000;
//     app.listen(PORT, () => {
//       console.log(`App is listening on port ${PORT}`);
//     });

//   } catch (error) {
//     console.error("Connection ERROR: ", error);
//     process.exit(1); // Exit the process on failure
//   }
// })();
