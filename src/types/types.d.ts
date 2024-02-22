export type TA = {
    name: string;
    id: number;
    avatar: string;
    telegram_ID: string;

}

export type Assignment = {
    title: string;
    id: number;
    file_link: string;
    due_Date: string;
    release_Date: Date;
}

export type Presentation = {
    id: number;
    name: string;
    topic: string;
    slides?: string;
    demo?: string;
    topic_cover?: string;
    avatar?: string;
    codes? : string;
}