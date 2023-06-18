import { Schema, model } from "mongoose";

const carSchema = new Schema(
    {
        city_mpg: {
            type: Number,
            required: true
        },
        class: {
            type: String,
            required: true
        },
        combination_mpg: {
            type: Number,
            required: true
        },
        cylinders: {
            type: Number,
            required: true
        },
        displacement: {
            type: Number,
            required: true
        },
        drive: {
            type: String,
            required: true
        },
        fuel_type: {
            type: String,
            required: true
        },
        highway_mpg: {
            type: Number,
            required: true
        },
        make: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        transmission: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const CarModel = model("car", carSchema);

export default CarModel;
