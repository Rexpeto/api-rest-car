import UserModel from "../models/user.schema";
import AuthUser from "../types/authUser";
import UserInterface from "../types/user.type";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { signToken } from "../utils/jwt.handle";

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

export const loginUser = async ({ email, password }: AuthUser) => {
    const isCheck = await UserModel.findOne({ email: email.toLowerCase() });

    if(!isCheck) {
        return "Datos inválidos";
    }

    const passwordHash = isCheck.password;

    const isCorrect = await verified(password, passwordHash);

    if(!isCorrect) {
        return "Contraseña incorrecta";
    }

    const jwt = await signToken(isCheck);
    const { id, name} = isCheck;

    return { id, name, email: email.toLowerCase(), access: jwt }
};

