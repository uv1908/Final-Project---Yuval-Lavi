import express from "express";
import { createUser } from "../controllers/usersController.js";

const router = express.Router();

router
    .post("/add", createUser)

export default router;