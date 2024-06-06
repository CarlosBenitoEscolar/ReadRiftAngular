import { Component, OnInit } from '@angular/core';
import { ExchangeService } from './../exchange.service';
import { Exchange, ExchangeStatus } from './../exchange';
import { BookService } from './../book.service'; 
import { Book } from './../book';



@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  exchanges: Exchange[] = [];
  userData: any;
  ExchangeStatus = ExchangeStatus; 


  constructor(private exchangeService: ExchangeService, private bookService: BookService) { }

  ngOnInit(): void {
    const userDataString = localStorage.getItem("USER_DATA");
    if (userDataString) {
      this.userData = JSON.parse(userDataString);
      this.getExchangesByDonor(this.userData.id);
    } else {
      console.error('Usuario no autenticado');
    }
  }

  getExchangesByDonor(donorId: number): void {
    this.exchangeService.obtenerExchangesPorDonor(donorId).subscribe({
      next: (response: Exchange[]) => {
        this.exchanges = response;
        console.log('Exchanges:', this.exchanges);
      },
      error: (error: any) => {
        console.error('Error getting exchanges:', error);
      }
    });
  }
  cargarExchanges(): void {
    this.exchangeService.obtenerExchangesPorDonor(this.userData.id).subscribe({
      next: (data) => {
        this.exchanges = data;
      },
      error: (error) => {
        console.error('Error al cargar los intercambios:', error);
      }
    });
  }

  approveExchange(id: number): void {
    this.exchangeService.approveExchange(id).subscribe({
      next: (response) => {
        console.log('Intercambio aprobado con éxito:', response);
        this.cargarExchanges();  
      },
      error: (error) => {
        console.error('Error aprobando el intercambio:', error);
      }
    });
  }

  cancelExchange(id: number): void {
    this.exchangeService.cancelExchange(id).subscribe({
      next: (response) => {
        console.log('Intercambio cancelado con éxito:', response);
        this.cargarExchanges();  
      },
      error: (error) => {
        console.error('Error cancelando el intercambio:', error);
      }
    });
  }
}