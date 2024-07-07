import { NextFunction, Request, Response } from 'express';
import { getAllSuperstars, getAllChampions, getSuperstarWithBrandAndTitle } from '../database/superstarsQueries.js';

export async function getAll(req: Request, res: Response, next: NextFunction) {
    const superstars = await getAllSuperstars();
    return res.send({ superstars });
}

export async function getChampions(req: Request, res: Response, next: NextFunction) {
    const superstars = await getAllChampions();
    return res.send({ superstars });
}

export async function getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if(id) {
        const superstarId = parseInt(id, 10);
        const superstar = await getSuperstarWithBrandAndTitle(superstarId);
        return res.json(superstar);
    }
}