import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListaBooksComponent } from './lista-books/lista-books.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },  // Redirige la ruta base a 'register'
  { path: 'login', component: LoginComponent },          // Ruta para el LoginComponent
  { path: 'register', component: RegisterComponent },     // Ruta para el RegisterComponent
  { path: 'lista-books', component: ListaBooksComponent }, // Define la ruta hacia ListaBooksComponent
  { path: 'reviews/:id', component: ReviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }