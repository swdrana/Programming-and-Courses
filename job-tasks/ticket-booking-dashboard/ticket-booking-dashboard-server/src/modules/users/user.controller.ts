import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAllUserFromDB, getUserByEmailFromDB } from "./user.service";
import { userValidationSchema } from "./user.validate";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body)
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
export const getUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.params;
    const user = await getUserByEmailFromDB(email);
    if (user) {
      res.json({
        status: true,
        message: "User fetched successfully",
        data: user,
      });
    } else {
      res.status(404).json({
        status: false,
        message: "User not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

