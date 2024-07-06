import express from "express";
import { getTitleHistory } from "../controllers/titleHistoryController.js";

const router = express.Router();

router
    .get("/:titleId", getTitleHistory)

export default router;