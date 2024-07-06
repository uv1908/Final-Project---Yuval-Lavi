import express from "express";
import { getAll, getById, getTitleWithCurrentHolderById } from "../controllers/titlesController.js";

const router = express.Router();

router
    .get("/", getAll)
    .get("/:id", getById)
    .get("/title-history/:titleId", getTitleWithCurrentHolderById)

export default router;