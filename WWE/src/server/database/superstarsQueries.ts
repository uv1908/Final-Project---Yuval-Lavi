import Superstar from "./superstar.js";
import { runSelect, runModify } from "./dbUtils.js";
import Brand from "./brand.js";

const rawId = 1;
const smackdownId = 2;
const hofId = 3;
const alumniId = 4;

async function getSuperstarsByBrand(...brandIds: number[]): Promise<Superstar[]> {
    const placeholders = brandIds.map(() => 'brand_id = ?').join(' OR ');
    const query = `SELECT * FROM superstars WHERE ${placeholders} ORDER BY name`;
    return runSelect<Superstar>(query, brandIds);
}

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

export async function getCurrentSuperstars(): Promise<Superstar[]> {
    return getSuperstarsByBrand(rawId, smackdownId);
}

export async function getSmackdownSuperstars() {
    return getSuperstarsByBrand(smackdownId);
}

export async function getRawSuperstars() {
    return getSuperstarsByBrand(rawId);
}

export async function getHoFSuperstars() {
    return getSuperstarsByBrand(hofId);
}

export async function getAlumniSuperstars() {
    return getSuperstarsByBrand(alumniId, hofId);
}

export async function deleteById(id: number) {
    return runModify("DELETE FROM superstars WHERE id = ?", id);
}