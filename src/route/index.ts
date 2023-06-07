import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTE = `${__dirname}`;

export const router = Router();

/*
 * Clean name of file
 * Example: user.route.ts -> user
 * @param fileName
 * @returns
 * */
const cleanFileName = (fileName: string) => fileName.split(".").shift();

/*
 * Check file in folder router and use router export
 * @param fileName
 * @returns
 **/
readdirSync(PATH_ROUTE).filter(fileName => {
    const file = cleanFileName(fileName);

    if (file !== "index") {
        import(`./${fileName}`).then(moduleRouter => {
            router.use(`/${file}`, moduleRouter.router);
        });

        console.log(`Ruta cargada -> ${file}`);
    }
});
