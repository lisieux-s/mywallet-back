import { Router } from "express";

import authRouter from "./authRouter.js";
import entryRouter from "./entryRouter.js";

const router = Router();
router.use(authRouter);
router.use(entryRouter);

export default router;