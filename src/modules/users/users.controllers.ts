import { Request, Response } from "express";
import { userServices } from "./users.services";

//signUp
const registerUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.registerUser(req.body);
        res.status(201).json({
            success: true,
            message: "User Registation Successfull",
            data: result.rows[0]
        })

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


export const userControllers ={
    registerUser
}