import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListaBooksComponent } from './lista-books/lista-books.component';
import { ReviewComponent } from './review/review.component';
import { PrincipalComponent } from './principal/principal.component';
import { NewbookComponent } from './newbook/newbook.component';
import { MisreviewComponent } from './misreview/misreview.component';
import { MisbooksComponent } from './misbooks/misbooks.component';
import { BookComponent } from './book/book.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SuperAdminDashboardComponent } from './super-admin-dashboard/super-admin-dashboard.component';
import { AdminGuard } from './admin.guard';
import { SuperAdminGuard } from './super-admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },    
  { path: 'lista-books', component: ListaBooksComponent, canActivate: [AuthGuard]  }, 
  { path: 'reviews/:id', component: ReviewComponent, canActivate: [AuthGuard] },
  { path: 'principal', component: PrincipalComponent },
  { path: 'newbook', component: NewbookComponent, canActivate: [AuthGuard] },
  { path: 'misreview', component: MisreviewComponent, canActivate: [AuthGuard] },
  { path: 'misbooks', component: MisbooksComponent, canActivate: [AuthGuard]  },
  { path: 'book/:id', component: BookComponent, canActivate: [AuthGuard] },
  { path: 'exchange', component: ExchangeComponent, canActivate: [AuthGuard] },
  { path: 'book/:id', component: BookComponent, canActivate: [AuthGuard]  },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard] },
  { path: 'super-admin-dashboard', component: SuperAdminDashboardComponent, canActivate: [SuperAdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
