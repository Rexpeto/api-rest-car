import { type Request, type Response } from "express";
import { loginUser, registerUser } from "../services/user.service";
import handleHttp from "../utils/error.handle";

export const loginCtrl = async ({ body }: Request, res: Response): Promise<void> => {
    const { email, password } = body
    try {
        if(!email) {
            return <any> res.status(403).json({msg: "Debes colocar su email"});
        }

        if(!password) {
            return <any> res.status(403).json({msg: "Debes colocar su contraseña"});
        }

        const user = await loginUser({email, password});

        res.status(200).json(user);
    } catch (e) {
        handleHttp(res, 'Oops! Ocurrio un error', e);
    }
};

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
