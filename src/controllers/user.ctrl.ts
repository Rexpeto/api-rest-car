import { Request, Response } from "express"

export const getUserCtrl = async (req: Request, res: Response) => {
    res.json({ msg: "Test from get" });
};

export const insertUserCtrl = async (req: Request, res: Response) => {
    res.json({ msg: "Test from post" });
};

