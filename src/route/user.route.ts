import { Router } from "express";
import { getUserCtrl, insertUserCtrl } from "../controllers/user.ctrl";

export const router = Router();

/*
 * Route https://[IpV4]:[PORT]/user
 * Method Get
 * */
router.get("/", getUserCtrl);

/*
 * Route https://[IpV4]:[PORT]/user/register
 * Method Post
 * */
router.post("/register", insertUserCtrl);
