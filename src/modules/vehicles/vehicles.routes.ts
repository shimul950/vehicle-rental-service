import { Router } from "express";
import { vehiclesControllers } from "./vehicles.controllers";
import logger from "../middleware/logger";
import auth from "../middleware/auth";

const router = Router();

router.post("/",logger,auth("admin"),vehiclesControllers.addNewVehicles);

router.get("/all", vehiclesControllers.getAllVehicles);

router.get("/:vehicleId",vehiclesControllers.getVehiclesById);

router.put("/:id",vehiclesControllers.updateVehicle);

router.delete("/:id",vehiclesControllers.deletVehicles);

export const vehicleRouter = router;

