import { runSelect, runModify } from "./dbUtils.js";
import User from "./user.js";

export async function insertUser(first_name: string, last_name: string, email: string, password: string, marketing: boolean) {
    const result = await runModify(
        "INSERT INTO users (first_name, last_name, email, password, marketing) VALUES (?, ?, ?, ?, ?)",
        [first_name, last_name, email, password, marketing ? 1 : 0]
    );
    return result;
}

export async function getNewestUser(): Promise<User | null> {
    const users = await runSelect<User>("SELECT * FROM users ORDER BY id DESC LIMIT 1");
    return users.length > 0 ? users[0] : null;
}

export async function getUserByEmailAndPassword(email: string, password: string): Promise<User | null> {
    const users = await runSelect<User>("SELECT * FROM users WHERE email = ? AND password = ?", [email, password]);
    return users.length > 0 ? users[0] : null;
}

export async function getAllUsers() {
    return runSelect<User>("SELECT * FROM users");
}

export async function toggleMarketing(id: number) {
    const users = await runSelect<User>('SELECT marketing FROM users WHERE id = ?', [id]);

    const currentStatus = users[0].marketing;
    const newMarketingStatus = !currentStatus;

    await runModify('UPDATE users SET marketing = ? WHERE id = ?', [newMarketingStatus ? 1 : 0, id]);
    return newMarketingStatus;
}

export async function deleteUserById(id: number) {
    await runModify('DELETE FROM users WHERE id = ?', [id]);
}