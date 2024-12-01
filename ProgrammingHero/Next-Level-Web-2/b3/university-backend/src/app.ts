import cors from "cors";
import express, { Request, Response } from "express";

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
