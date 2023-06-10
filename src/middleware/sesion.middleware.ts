import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

// Interface of request with user
interface RequestExt extends Request {
    user?: string | JwtPayload;
}

// Middleware session user active
const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
    const jwtAuthentication = req.headers.authorization ?? "";

    try {
        if (jwtAuthentication === "") {
            return res.status(400).json({ msg: "Debe iniciar sesión" });
        }

        const jwtByUser = jwtAuthentication.split(" ").pop();
        const user = await verifyToken(`${jwtByUser}`);

        if (!user) {
            return res.status(401).json({ msg: "Token inválido" });
        }
        req.user = user;
        next();
    } catch (e) {
        res.status(400).json({ msg: "Sesión no válida" });
        console.log(e);
    }
};

export default checkJwt;
