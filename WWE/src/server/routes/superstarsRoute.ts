import express from "express";
import { getAll, getById, getChampions } from "../controllers/superstarsController.js";

const router = express.Router();

router
    .get("/", getAll)
    .get("/champions", getChampions)
    .get("/:id", getById)

export default router;