import { Router } from "express";
import { signUp } from "../controllers/authController.js";

import validateUserSchemaMiddleware from "../middlewares/validateUserSchemaMiddleware.js";

const authRouter = Router();
authRouter.post('/sign-up', validateUserSchemaMiddleware, signUp)

export default authRouter;