import { Request, Response, NextFunction } from "express";
import { insertUser } from '../database/usersQueries.js';

export async function createUser(req: Request, res: Response, next: NextFunction) {
    const { first_name, last_name, email, password, marketing } = req.body;
    const result = await insertUser(first_name, last_name, email, password, marketing);
    return res.send({ result });
}