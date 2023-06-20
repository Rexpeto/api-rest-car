import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";
import {
    getCarService,
    searchCarMake,
    searchCarModel
} from "../services/car.service";

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

export const searchModel = async ({ body }: Request, res: Response) => {
    const { model } = body;

    if (!model) {
        res.status(403).json({ msg: "Debe enviar un modelo" });
    }

    try {
        const cars = await searchCarModel(model);

        res.status(200).json(cars);
    } catch (e) {
        handleHttp(res, "Opps! Ocurrió un error", e);
    }
};
