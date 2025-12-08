import { Router } from "express";
import { authController } from "./auth.controllers";


const router = Router();

router.post("/",authController.signInUser)

export const authRouter = router;