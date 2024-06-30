import express from "express";
import { getAll, getBySuperstar } from "../controllers/brandsController.js";

const router = express.Router();

router
    .get("/", getAll)
    .get("/:id", getBySuperstar)

export default router;