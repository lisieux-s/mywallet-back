import { Router } from "express";
import { signUp } from "../controllers/authController.js";

import validateSignUpSchemaMiddleware from "../middlewares/validateSignUpSchemaMiddleware.js";

const authRouter = Router();
authRouter.post('/sign-up', validateSignUpSchemaMiddleware, signUp)

export default authRouter;