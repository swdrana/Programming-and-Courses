import cors from "cors";
import express, { Request, Response } from "express";
import studentRouter from "./app/modules/student"
const app = express();

// parsers
app.use(express.json());  
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});
app.use("/student", studentRouter)

export default app;
