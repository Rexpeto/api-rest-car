import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";
import { getCarService, searchCarMake } from "../services/car.service";

export const getCars = async (req: Request, res: Response) => {
    try {
        const cars = await getCarService();

        res.status(200).json(cars);
    } catch (e) {
        handleHttp(res, "Oops! Ocurrió un error", e);
    }
};

export const searchMake = async ({ body }: Request, res: Response) => {
    const { make } = body;
    try {
        const cars = await searchCarMake(make);

        res.status(200).json(cars);
    } catch (e) {
        handleHttp(res, "Oops! Ocurrió un error", e);
    }
};
