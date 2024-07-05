import express from "express";
import { createUser, deleteUser, getAll, getNewest, signIn, updateMarketingStatus } from "../controllers/usersController.js";

const router = express.Router();

router
    .post("/add", createUser, getNewest)
    .post("/signIn", signIn)
    .get("/all", getAll)
    .patch('/:id/marketing', updateMarketingStatus)
    .delete('/:id', deleteUser)

export default router;