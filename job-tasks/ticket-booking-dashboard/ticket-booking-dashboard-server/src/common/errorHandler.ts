import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { MongoError } from 'mongodb';
import UserModel from '../modules/users/user.model'; // Adjust the path as needed

const errorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: err.errors,
    });
  } else if (err instanceof MongoError && err.code === 11000) {
    // Extract the email causing the conflict from the request body
    const email = req.body.email;
    if (email) {
      try {
        const existingUser = await UserModel.findOne({ email });
        return res.status(400).json({
          success: false,
          message: 'Email already exists',
          data: existingUser, // Include the existing user's data
        });
      } catch (findError) {
        return res.status(500).json({
          success: false,
          message: 'Failed to retrieve existing user data',
          error: findError.message,
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: 'Email already exists',
      });
    }
  } else if (err instanceof Error) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  } else {
    return res.status(500).json({
      success: false,
      message: 'An unknown error occurred',
    });
  }
};

export default errorHandler;
