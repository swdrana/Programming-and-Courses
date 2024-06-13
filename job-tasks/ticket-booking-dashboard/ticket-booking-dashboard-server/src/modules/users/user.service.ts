import { TUser } from "./user.interface";
import UserModel from "./user.model";

export const createUserToDB = async (payload : TUser) => {
    return await UserModel.create(payload)
})