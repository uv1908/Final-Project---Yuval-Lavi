import { Request, Response, NextFunction } from "express";
import { deleteUserById, getAllUsers, getNewestUser, getUserByEmailAndPassword, insertUser, toggleMarketing } from '../database/usersQueries.js';

export async function createUser(req: Request, res: Response, next: NextFunction) {
    const { first_name, last_name, email, password, marketing } = req.body;
    await insertUser(first_name, last_name, email, password, marketing);
    next();
}

export async function getNewest(req: Request, res: Response, next: NextFunction) {
    const user = await getNewestUser();
    return res.send({ user });
}

export async function signIn(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const user = await getUserByEmailAndPassword(email, password);
    if (user) {
        return res.send({ user });
    }
}

export async function getAll(req: Request, res: Response, next: NextFunction) {
    const users = await getAllUsers();
    return res.json({ users });
}

export async function updateMarketingStatus(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    await toggleMarketing(Number(id));
}

export async function deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    await deleteUserById(Number(id));
}