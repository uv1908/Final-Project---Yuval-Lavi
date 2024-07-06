import { NextFunction, Request, Response } from 'express';
import { getTitleHistoryWithDaysHeld } from '../database/titleHistoryQueries.js';

export async function getTitleHistory(req: Request, res: Response, next: NextFunction) {
    const { titleId } = req.params;

    if (titleId) {
        const parsedTitleId = parseInt(titleId, 10);
        const history = await getTitleHistoryWithDaysHeld(parsedTitleId);
        return res.json(history);
    }
}