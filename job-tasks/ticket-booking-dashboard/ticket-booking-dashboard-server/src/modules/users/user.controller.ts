import { Request, Response, NextFunction } from 'express';
import UserModel from './user.model';
import { userValidationSchema } from './user.validate';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validateUserData = userValidationSchema.parse(req.body);
    const result = await UserModel.create(validateUserData);
    res.json({
      status: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
};

export const getAllUsers = (req: Request, res: Response) => {
  res.send('Hello World!');
};
