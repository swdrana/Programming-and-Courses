import express from 'express';
import { createStudent, getAllStudents } from './student.controller';
export const StudentRoute = express.Router();

StudentRoute.get("/",getAllStudents)
StudentRoute.post("/",createStudent)

