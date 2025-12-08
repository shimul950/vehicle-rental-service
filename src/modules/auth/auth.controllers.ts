import { Request, Response } from "express";
import { authServices } from "./auth.services";

const signInUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    
    try {
        const result = await authServices.signInUser(email, password);
        res.status(200).json({
            success: false,
            message: "Loggin Successfully",
            data: result
        })

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const authController = {
    signInUser
}