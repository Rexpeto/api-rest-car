import { Response } from "express";

const handleHttp = (res: Response, error: string, e: any) => {
    res.status(500).json({ msg: error });
    console.log(e);
};

export default handleHttp;
