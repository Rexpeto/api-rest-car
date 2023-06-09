import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        image: {
            type: String,
            default: "perfil.jpg"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const UserModel = model("users", userSchema);

export default UserModel;
