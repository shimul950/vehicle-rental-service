import { Router } from "express";
import { userControllers } from "./users.controllers";

const router = Router();

router.post("/",userControllers.registerUser);

router.post("/", )

export const userRouter = router;