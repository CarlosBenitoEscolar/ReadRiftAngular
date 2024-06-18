import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaBooksComponent } from './lista-books/lista-books.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewComponent } from './review/review.component';
import { PrincipalComponent } from './principal/principal.component';
import { NewbookComponent } from './newbook/newbook.component';
import { BookComponent } from './book/book.component';
import { MisreviewComponent } from './misreview/misreview.component';
import { MisbooksComponent } from './misbooks/misbooks.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    ListaBooksComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    ReviewComponent,
    PrincipalComponent,
    NewbookComponent,
    BookComponent,
    MisreviewComponent,
    MisbooksComponent,
    ExchangeComponent,
    AdminDashboardComponent,
    SuperAdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
