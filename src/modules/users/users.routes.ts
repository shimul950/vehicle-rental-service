import { Router } from "express";
import { userControllers } from "./users.controllers";
import logger from "../middleware/logger";
import auth from "../middleware/auth";

const router = Router();

router.post("/",userControllers.registerUser);

router.get("/", logger,auth("admin"),userControllers.getAllUser);

router.put("/:id",userControllers.updateUser);

router.delete("/:id",userControllers.deleteUser);

export const userRouter = router;