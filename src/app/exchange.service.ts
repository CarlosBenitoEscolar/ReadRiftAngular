import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exchange, ExchangeStatus } from './exchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private baseURL = 'http://localhost:8080/api/exchanges';

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeExchanges(): Observable<Exchange[]> {
    return this.httpClient.get<Exchange[]>(`${this.baseURL}`);
  }

  obtenerExchangesPorBorrower(borrowerId: number): Observable<Exchange[]> {
    return this.httpClient.get<Exchange[]>(`${this.baseURL}/borrower/${borrowerId}`);
  }
  registrarExchange(exchange: Exchange): Observable<Exchange> {
    return this.httpClient.post<Exchange>(`${this.baseURL}`, exchange);
  }

  obtenerExchangesPorDonor(donorId: number): Observable<Exchange[]> {
    return this.httpClient.get<Exchange[]>(`${this.baseURL}/donor/${donorId}`);
  }

  obtenerExchangesPorEstado(status: ExchangeStatus): Observable<Exchange[]> {
    return this.httpClient.get<Exchange[]>(`${this.baseURL}/status/${status}`);
  }
  
  updateExchangeStatus(id: number, status: ExchangeStatus): Observable<Exchange> {
    return this.httpClient.patch<Exchange>(`${this.baseURL}/${id}/status`, { status });
  }
  approveExchange(id: number): Observable<Exchange> {
    return this.httpClient.patch<Exchange>(`${this.baseURL}/${id}/approve`, {});
  }

  cancelExchange(id: number): Observable<Exchange> {
    return this.httpClient.patch<Exchange>(`${this.baseURL}/${id}/cancel`, {});
  }

}
