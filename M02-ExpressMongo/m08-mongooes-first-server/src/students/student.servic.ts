import mongoose from "mongoose";
import { studentSchema } from "./student.model";
import { IStudent } from "./students.interface";

export const getAllUserFromDB = async () => {
  const students = await mongoose
    .model<IStudent>("Student", studentSchema)
    .find();
  return students;
};
export const createStudentUsingDB = async (student: IStudent) => {
  const newStudent: IStudent = await mongoose.model<IStudent>("Student", studentSchema).create(student);
  return newStudent;
};
