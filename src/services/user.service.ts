import UserModel from "../models/user.schema";
import AuthUser from "../types/authUser";
import UserInterface from "../types/user.type";
import { encrypt } from "../utils/bcrypt.handle";

/**
 * Register user
 * @param user
 * @returns
 * */

export const registerUser = async ({name, email, password}: UserInterface) => {
    const isCheck = await UserModel.findOne({ email });

    if(isCheck) {
        return <string> "El correo electronico ya existe"
    }

    //? Hash password of user
    const passwordHash = await encrypt(password);

    const newUser = await UserModel.create(
        {
            name: name.toLowerCase(),
            email: email.toLowerCase(),
            password: passwordHash
        }
    );

    return newUser;
};

/**
 * Login user
 * @param Auth
 * @returns
 * */

export const loginUser = async (Auth: AuthUser) => {};
