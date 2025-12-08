import { Request, Response } from "express";
import { vehiclesServices } from "./vehicles.services";

const addNewVehicles = async (req: Request, res: Response) => {
    try {
        const result = await vehiclesServices.addNewVehicles(req.body);
        res.status(201).json({
            success: true,
            message: "vehicles added Successfull",
            data: result.rows[0]
        })

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
const getAllVehicles = async (req: Request, res: Response) => {
    try {
        const result = await vehiclesServices.getAllVehicles();
        res.status(201).json({
            success: true,
            message: "vehicles showing Successfully",
            data: result.rows
        })

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const getVehiclesById = async(req:Request, res:Response) =>{
    try {
        const result = await vehiclesServices.getVehiclesById(req.params.id as string);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'vehicles not found'
            })
        } else {
            res.status(200).json({
                success: true,
                message: "User fetched successfully",
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

const updateVehicle = async (req: Request, res: Response) => {
    // console.log(req.params.id);
    const { vehicle_name, registration_number, daily_rent_price, availability_status } = req.body;
    try {
        const result = await vehiclesServices.updateVehicle(vehicle_name, registration_number, daily_rent_price, req.params.id!)
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: 'Vehicles not found'
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Vehicles updated successfully",
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

const deletVehicles =  async (req: Request, res: Response) => {
  try {
    const result = await vehiclesServices.deletVehicles(req.params.id!)
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: 'Vehicles not found'
      })
    } else {
      res.status(200).json({
        success:true,
        message: "Vehicles deleted successfully",
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

export const vehiclesControllers ={
    addNewVehicles,
    getAllVehicles,
    getVehiclesById,
    updateVehicle,
    deletVehicles
}