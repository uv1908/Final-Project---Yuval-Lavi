export interface TitleHistory {
    id: number;
    title_id: number;
    superstar_id: number;
    date_won: string;
    date_lost: string | null;
    superstar_name?: string;
    days_held: number;
}