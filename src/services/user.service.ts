import UserModel from "../models/user.schema";
import UserInterface from "../types/user.type";

/**
 * Register user
 * @param user
 * @returns
 * */

export const registerUser = async (user: UserInterface) => {
    const response = await UserModel.create(user);

    return response;
};

/**
 * Seach user by email
 * @param email
 * @returns
 * */

export const getUser = async () => {
    return { data: "Hola mundo ->" };
};
