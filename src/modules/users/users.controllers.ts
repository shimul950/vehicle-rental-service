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

const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.getAllUser()
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: result.rows
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
            details: err
        })
    }
};

const updateUser = async (req: Request, res: Response) => {
    // console.log(req.params.id);
    const { name, email } = req.body;
    try {
        const result = await userServices.updateUser(name, email, req.params.id!)
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'user not found'
            })
        } else {
            res.status(200).json({
                success: true,
                message: "User updated successfully",
                data: result.rows[0]
            })
        }
    }
    catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }

}

const deleteUser =  async (req: Request, res: Response) => {
  try {
    const result = await userServices.deleteUser(req.params.id!)
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: 'user not found'
      })
    } else {
      res.status(200).json({
        success:true,
        message: "User deleted successfully",
        data: result.rows
      })
    }
  }
  catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }

}

export const userControllers ={
    registerUser,
    updateUser,
    deleteUser,
    getAllUser
}