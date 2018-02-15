export interface Message {
    text: string;
    sender: string;
    receiver: string | null;
    date?: Date;
}
