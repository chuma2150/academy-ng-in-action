export interface Message {
    text: string;
    sender: string;
    receiver?: string;
    date?: Date;
}
