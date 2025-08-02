import { Request, Response } from "express";

export const helloWorldCallback = (req: Request, res: Response) => {
    res.status(200).send({message: "Hello World!"})
}
