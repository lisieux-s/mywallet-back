import { Router } from "express";
import { createEntry } from "../controllers/entryController.js";

import validateEntrySchema from "../middlewares/validateEntrySchemaMiddleware.js";

const entryRouter = Router();
entryRouter.post('/new', validateEntrySchema, createEntry)

export default entryRouter;