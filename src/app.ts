import express from "express";
import cors from "cors";
import "dotenv/config";
import { router } from "./route";
import dbConnect from "./config/mongo";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT ?? 5000;

dbConnect()
    .then(() => console.log("Conectado correctamente a MongoDB"))
    .catch(() => console.log("No se pudo conectar a MongoDB"));

app.listen(PORT, () => {
    console.log(`Funcionando por el puerto ${PORT}`);
});
