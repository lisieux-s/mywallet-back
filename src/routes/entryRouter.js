import { Router } from "express";
import { createEntry, getEntries } from "../controllers/entryController.js";

import validateEntrySchema from "../middlewares/validateEntrySchemaMiddleware.js";

const entryRouter = Router();
entryRouter.post('/new', validateEntrySchema, createEntry)
entryRouter.get('/home', getEntries)

export default entryRouter;