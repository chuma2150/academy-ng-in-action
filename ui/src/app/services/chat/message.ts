export interface Message {
  id?: string;
  text: string;
  sender: string;
  receiver?: string;
  date: Date;
}
