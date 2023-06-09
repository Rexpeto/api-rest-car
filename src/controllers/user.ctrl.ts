import { type Request, type Response } from "express";
import { getUser, registerUser } from "../services/user.service";
import handleHttp from "../utils/error.handle";

export const getUserCtrl = async (
    req: Request,
    res: Response
): Promise<void> => {
    const response = getUser();
    res.json({ msg: "Test from get ->" });
};

export const getUsers = async (
    req: Request,
    res: Response
): Promise<void> => {};

export const insertUserCtrl = async (
    { body }: Request,
    res: Response
): Promise<void> => {
    const { name, email, password } = body;

    try {
        if (!name) {
            return <any> res
                .status(403)
                .json({ msg: "Debe colocar un nombre de usuario" });
        }

        if(!email) {
            return <any> res.status(403).json({msg: "Debe colocar un correo eléctronico"})
        }
        
        if(!password) {
            return <any> res.status(403).json({msg: "Debe colocar una contraseña"})
        }
 
        const newUser = await registerUser({name, email, password});
        res.status(200).json(newUser);
    } catch (e) {
        handleHttp(res, "Oops!! ocurrio un error", e);
    }
};
