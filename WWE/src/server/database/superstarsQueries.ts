import Superstar from "./superstar.js";
import { runSelect, runModify } from "./dbUtils.js";

const rawId = 1;
const smackdownId = 2;
const hofId = 3;
const alumniId = 4;

async function getSuperstarsByBrand(...brandIds: number[]): Promise<Superstar[]> {
    const placeholders = brandIds.map(() => 'brand_id = ?').join(' OR ');
    const query = `SELECT * FROM superstars WHERE ${placeholders}`;
    return runSelect<Superstar>(query, brandIds);
}

export async function getAllSuperstars() {
    return runSelect<Superstar>("SELECT * FROM superstars");
}

export async function getAllChampions() {
    return runSelect<Superstar>("SELECT * FROM superstars WHERE title IS NOT NULL AND title != ''");
}

// export async function getSuperstar(id: number) {
//     const [superstar] = await runSelect<Superstar>("SELECT * FROM superstars WHERE id = ?", id);
//     return superstar;
// }

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