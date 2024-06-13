import mongoose from "mongoose";
import { mongoUri, port } from "./config";
import app from "./app";

async function start() {
  try {
    await mongoose.connect(mongoUri as string);
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    })
  } catch (error) {
    console.log(error)
  }
}

start();
