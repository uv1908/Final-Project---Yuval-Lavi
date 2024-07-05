import express from "express";
import { deleteSuperstar, getAll, getAlumni, getById, getChampions, getCurrent, getFromRaw, getFromSmackdown, getHallOfFame } from "../controllers/superstarsController.js";


const router = express.Router();

router
    .get("/", getAll)
    .get("/champions", getChampions)
    .get("/current", getCurrent)
    .get("/raw", getFromRaw)
    .get("/smackdown", getFromSmackdown)
    .get("/hof", getHallOfFame)
    .get("/alumni", getAlumni)
    .get("/:id", getById)
    .delete("/delete/:id", deleteSuperstar)

export default router;