import { NextFunction, Request, Response } from 'express';
import { getAllTitles, getTitle, getTitleWithCurrentHolder } from '../database/titlesQueries.js';

export async function getAll(req: Request, res: Response, next: NextFunction) {
    const titles = await getAllTitles();
    return res.send({ titles });
}

export async function getById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if(id) {
        const titleId = parseInt(id, 10);
        const title = await getTitle(titleId);
        return res.json(title);
    }
}

export async function getTitleWithCurrentHolderById(req: Request, res: Response, next: NextFunction) {
    const { titleId } = req.params;

    if (titleId) {
        const parsedTitleId = parseInt(titleId, 10);
        const title = await getTitleWithCurrentHolder(parsedTitleId);
        return res.json(title);
    }
}