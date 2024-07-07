import { runSelect } from "./dbUtils.js";

export async function getTitleHistoryWithDaysHeld(titleId: number) {
    const history = await runSelect(`
        SELECT th.*, 
        s.name AS superstar_name, 
        DATEDIFF(COALESCE(th.date_lost, CURDATE()), th.date_won) AS days_held
        FROM title_history th
        JOIN superstars s ON th.superstar_id = s.id
        WHERE th.title_id = ?;
    `, titleId);
    return history;
}