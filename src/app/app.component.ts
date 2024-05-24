import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ReadRift';
  showHeaderFooter = true;

  constructor(private router: Router) {
    // Escuchar cambios en la navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateHeaderFooterVisibility();
    });

    // Actualizar inmediatamente basado en la URL actual
    this.updateHeaderFooterVisibility();
  }

  updateHeaderFooterVisibility() {
    this.showHeaderFooter = !this.isLoginPage() && !this.isRegisterPage();
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  isRegisterPage(): boolean {
    return this.router.url === '/register';
  }
}
