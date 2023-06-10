import { Router } from "express";
import { loginCtrl, insertUserCtrl } from "../controllers/user.ctrl";

export const router = Router();

/*
 * Route https://[IpV4]:[PORT]/user/login
 * Method Get
 * */
router.post("/login", loginCtrl);

/*
 * Route https://[IpV4]:[PORT]/user/register
 * Method Post
 * */
router.post("/register", insertUserCtrl);
