import clientAxios from "../config/axios";
import CarModel from "../models/car.schema";
import { CarProps } from "../types/car.types";

/* Get all cars of MongoDB
 * @returns Array cars
 * */
export const getCarService = async () => {
    const cars = await CarModel.find();

    if (!cars.length) {
        return { msg: "No se encontró resultados" };
    }

    return cars;
};

/* Search car from params search
 * @params search {string}
 * @returns
 * */
export const searchCarMake = async (make: string) => {
    try {
        const makeCar = await CarModel.find({ make });

        if (!makeCar.length) {
            const { data } = await clientAxios(`?make=${make}&limit=30`);

            if (!data.length) return { msg: "Marca no encontrada" };

            const newCars = await CarModel.create(data);
            console.log(make, newCars);
            return newCars;
        }

        return makeCar;
    } catch (e) {
        console.log(e);
    }
};
