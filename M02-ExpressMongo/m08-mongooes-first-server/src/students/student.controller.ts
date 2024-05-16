import { Request, Response } from "express"
import { createStudentUsingDB, getAllUserFromDB } from "./student.servic"

export const getAllStudents = async (req:Request, res:Response) => {
    const students = await getAllUserFromDB()
    res.status(200).send(students)
}
export const createStudent =async (req:Request, res:Response) => {
    const newStudent = await createStudentUsingDB(req.body)
    res.status(200).send(newStudent)
}