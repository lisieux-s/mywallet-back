import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";

import validateSignUpSchemaMiddleware from "../middlewares/validateSignUpSchemaMiddleware.js";
import validateSignInSchemaMiddleware from "../middlewares/validateSignInSchemaMiddleware.js";

const authRouter = Router();
authRouter.post('/sign-up', validateSignUpSchemaMiddleware, signUp)
authRouter.post('/', validateSignInSchemaMiddleware, signIn)

export default authRouter;