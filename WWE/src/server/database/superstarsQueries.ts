import Superstar from "./superstar.js";
import { runSelect, runModify } from "./dbUtils.js";

export async function getAllSuperstars() {
    return runSelect<Superstar>("SELECT * FROM superstars ORDER BY name");
}

export async function getAllChampions() {
    return runSelect<Superstar>("SELECT * FROM superstars WHERE title IS NOT NULL AND title != ''");
}

export async function getSuperstar(id: number) {
    const [superstar] = await runSelect<Superstar>("SELECT * FROM superstars WHERE id = ?", id);
    return superstar;
}

export async function getSuperstarWithBrandAndTitle(id: number) {
    const [superstar] = await runSelect(`
        SELECT s.*, b.name AS brand_name, b.img_url AS brand_img_url, t.img_url AS title_img_url, t.id AS title_id 
        FROM superstars s
        JOIN brands b ON s.brand_id = b.id
        LEFT JOIN titles t ON s.title = t.name
        WHERE s.id = ?
    `, id);
    return superstar;
}