import express from "express";
import { getAll, getAlumni, getChampions, getCurrent, getFromRaw, getFromSmackdown, getHallOfFame } from "../controllers/superstarsController.js";


const router = express.Router();

router
    .get("/", getAll)
    .get("/champions", getChampions)
    .get("/current", getCurrent)
    .get("/raw", getFromRaw)
    .get("/smackdown", getFromSmackdown)
    .get("/hof", getHallOfFame)
    .get("/alumni", getAlumni)
    // .get("/:id", getById)

export default router;