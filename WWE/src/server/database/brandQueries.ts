import Superstar from "./superstar.js";
import { runSelect, runModify } from "./dbUtils.js";
import Brand from "./brand.js";

export async function getBrands() {
    return runSelect<Brand>("SELECT * FROM brands");
}

export async function getBrandBySuperstar(superstarId: number) {
    return runSelect<Brand>("SELECT brands.* FROM superstars JOIN brands ON superstars.brand_id = brands.id WHERE superstars.id = ?", superstarId);
}