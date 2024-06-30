import { NextFunction, Request, Response } from 'express';
import { getBrandBySuperstar, getBrands } from '../database/brandQueries.js';

export async function getAll(req: Request, res: Response, next: NextFunction) {
    const brands = await getBrands();
    return res.send({ brands });
}

export async function getBySuperstar(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;

    if(id) {
        const superstarId = parseInt(id, 10);
        const brand = await getBrandBySuperstar(superstarId);
        return res.send({ brand });
    }
}