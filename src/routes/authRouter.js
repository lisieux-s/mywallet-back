import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";

import validateSignUpSchema from "../middlewares/validateSignUpSchemaMiddleware.js";
import validateSignInSchema from "../middlewares/validateSignInSchemaMiddleware.js";

const authRouter = Router();
authRouter.post('/sign-up', validateSignUpSchema, signUp)
authRouter.post('/', validateSignInSchema, signIn)

export default authRouter;