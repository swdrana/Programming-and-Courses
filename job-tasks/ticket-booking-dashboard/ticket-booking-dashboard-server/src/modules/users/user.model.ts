import mongoose from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true }
}, {
    timestamps: true
});
})

const UserModel = mongoose.model<IUser>('User', userSchema);
export default UserModel