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


const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },    
  { path: 'lista-books', component: ListaBooksComponent }, 
  { path: 'reviews/:id', component: ReviewComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'newbook', component: NewbookComponent},
  { path: 'misreview', component: MisreviewComponent},
  { path: 'misbooks', component: MisbooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }