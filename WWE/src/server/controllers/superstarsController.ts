import { NextFunction, Request, Response } from 'express';
import { getAllChampions, getAllSuperstars, getAlumniSuperstars, getCurrentSuperstars, getHoFSuperstars, getRawSuperstars, getSmackdownSuperstars } from '../database/superstarsQueries.js';

export async function getAll(req: Request, res: Response, next: NextFunction) {
    const superstars = await getAllSuperstars();
    return res.send({ superstars });
}

export async function getChampions(req: Request, res: Response, next: NextFunction) {
    const superstars = await getAllChampions();
    return res.send({ superstars });
}

// export async function getById(req: Request, res: Response, next: NextFunction) {
//     const { id } = req.params;

//     if(id) {
//         const superstarId = parseInt(id, 10);
//         const superstar = await getSuperstar(superstarId);
//         const brand = await getBrandById(superstar.brand_id);
//         return res.send({ superstar, brand });
//     }
// }

export async function getCurrent(req: Request, res: Response, next: NextFunction) {
    const superstars = await getCurrentSuperstars();
    return res.send({ superstars });
}

export async function getFromRaw(req: Request, res: Response, next: NextFunction) {
    const superstars = await getRawSuperstars();
    return res.send({ superstars });
}

export async function getFromSmackdown(req: Request, res: Response, next: NextFunction) {
    const superstars = await getSmackdownSuperstars();
    return res.send({ superstars });
}

export async function getHallOfFame(req: Request, res: Response, next: NextFunction) {
    const superstars = await getHoFSuperstars();
    return res.send({ superstars });
}

export async function getAlumni(req: Request, res: Response, next: NextFunction) {
    const superstars = await getAlumniSuperstars();
    return res.send({ superstars });
}