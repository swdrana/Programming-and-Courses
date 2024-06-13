import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAllUserFromDB } from "./user.service";
import { userValidationSchema } from "./user.validate";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validateUserData = userValidationSchema.parse(req.body);
    const result = await createUserToDB(validateUserData);
    res.json({
      status: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUserFromDB();
    res.json({
      status: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};
