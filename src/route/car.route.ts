import { Router } from "express";
import { getCars, searchMake, searchModel } from "../controllers/car.ctrl";

export const router = Router();

router.get("/", getCars);
router.get("/make", searchMake);
router.get("/model", searchModel);
