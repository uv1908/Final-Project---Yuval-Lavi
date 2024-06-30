import { runSelect, runModify } from "./dbUtils.js";
import User from "./user.js";

export async function insertUser(first_name: string, last_name: string, email: string, password: string, marketing: boolean) {
    const result = await runModify(
        "INSERT INTO users (first_name, last_name, email, password, marketing) VALUES (?, ?, ?, ?, ?)",
        [first_name, last_name, email, password, marketing ? 1 : 0]
    );
    return result;
}