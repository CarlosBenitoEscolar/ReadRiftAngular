export class Exchange {
    id?: number;
    bookId?: number;
    borrowerId?: number;
    donorId?: number;
    status?: ExchangeStatus;
    requestDate?: Date;
}

export enum ExchangeStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    CANCELLED = 'CANCELLED'
  }

 