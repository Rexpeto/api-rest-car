import { hash } from "bcrypt";

/*
 * Hash password of user
 * @param password
 * @returns
 * */
export const encrypt = async (password: string) => {
    const passwordHash = await hash(password, 10);

    return passwordHash;
};

/*
 * Verified user password with databases
 * @param password
 * @returns
 * */
export const verified = async (password: string) => {};
