import express, { Request, Response } from "express";
import { StudentRoute } from "./students/student.route";
export const app = express();


app.use(express.json());
app.use("/students",StudentRoute)
