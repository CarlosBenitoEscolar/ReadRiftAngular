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
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateHeaderFooterVisibility();
    });

    this.updateHeaderFooterVisibility();
  }

  updateHeaderFooterVisibility() {
    this.showHeaderFooter = !this.isLoginPage() && !this.isRegisterPage() && !this.isPrincipalPage();
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  isRegisterPage(): boolean {
    return this.router.url === '/register';
  }

  isPrincipalPage(): boolean{
    return this.router.url === '/principal'
  }
}
