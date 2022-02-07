import { Router } from "express";
import { signUp } from "../controllers/authController.js";

const authRouter = Router();
authRouter.post('/sign-up', signUp)

export default authRouter;