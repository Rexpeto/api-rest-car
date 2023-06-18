import { Router } from "express";
import { getCars, searchMake } from "../controllers/car.ctrl";

export const router = Router();

router.get("/", getCars);
router.get("/make", searchMake);
