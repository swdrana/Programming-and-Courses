import mongoose from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new mongoose.Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<TUser>("User", userSchema);
export default UserModel;
