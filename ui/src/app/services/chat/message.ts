export interface MessageDto {
  id: string;
  text: string;
  sender: string;
  receiver?: string;
  date: string;
}

export interface Message extends Omit<MessageDto, 'id' | 'date'> {
  id?: string;
  date: Date;
}

export const mapMessages = (messages: MessageDto[]): Message[] => messages.map(mapMessage);

export const mapMessage = (message: MessageDto): Message => ({ ...message, date: new Date(message.date) });
