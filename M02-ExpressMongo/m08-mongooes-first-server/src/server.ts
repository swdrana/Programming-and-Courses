import mongoose from "mongoose";
import { app } from "./app";

mongoose.connect("mongodb://localhost:27017/myDB").then(( ) => {
  console.log("Database Connected");
  app.listen(8000, () => {
    console.log("Server Connected");
  });
});
