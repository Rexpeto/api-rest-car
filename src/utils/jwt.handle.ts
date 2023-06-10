import { sign, verify } from "jsonwebtoken";
import UserInterface from "../types/user.type";

const JWT_SECRET = process.env.JWT_SECRET ?? "carElectric";

/*
 * Create Json web token of user
 * @param id, name, email
 * @return jwt
 * */
export const signToken = async ({ id, name, email }: UserInterface) => {
    const jwt = sign({ id, name, email }, JWT_SECRET, {
        expiresIn: "2h"
    });

    return jwt;
};
/* Verify token of user
 * @param jwt
 * @return isOk
 * */
export const verifyToken = async (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET);

    return isOk;
};
