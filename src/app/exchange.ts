export class Exchange {
    id?: number;
    bookId?: number;
    borrowerId?: number;
    donorId?: number;
    status?: ExchangeStatus;
    requestDate?: Date;
    bookTitle?: string;
}

export enum ExchangeStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    CANCELLED = 'CANCELLED'
  }

 