import express, { Request, Response } from "express";
import initDB from "./config/db";
import { userRouter } from "./modules/users/users.routes";
import config from "./config";
import { authRouter } from "./modules/auth/auth.routes";
import { vehicleRouter } from "./modules/vehicles/vehicles.routes";
import path from "path";
const app = express()
const port = config.port;

// parser
app.use(express.json());

//auth router
app.use("/api/v1/auth/signIn", authRouter);

//initializing database
initDB();

//user
app.use("/api/v1/auth/signup", userRouter);

// vehicles
app.use("/api/v1/vehicles", vehicleRouter);



app.get("/", (req, res) => {
    res.send('hellow world 123')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
