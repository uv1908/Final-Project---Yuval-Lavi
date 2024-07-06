import Title from "./title.js";
import { runSelect, runModify } from "./dbUtils.js";

export async function getAllTitles() {
    return runSelect<Title>("SELECT * FROM titles");
}

export async function getTitle(id: number) {
    const [title] = await runSelect<Title>("SELECT * FROM titles WHERE id = ?", id);
    return title;
}

export async function getTitleWithCurrentHolder(titleId: number) {
    const title = await runSelect(`
        SELECT t.*,
        s.name AS current_holder_name,
        s.img_url AS current_holder_img,
        DATEDIFF(CURDATE(), th.date_won) AS days_held
        FROM titles t
        JOIN title_history th ON t.id = th.title_id
        JOIN superstars s ON th.superstar_id = s.id
        WHERE th.date_lost IS NULL AND t.id = ?;
    `, titleId);
    return title;
}