import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CarruselPerrosComponent } from './carrusel-perros/carrusel-perros.component';



@NgModule({
  exports:[
    NavbarComponent,
    LoginFormComponent,
    CarruselPerrosComponent
  ],
  declarations: [
    NavbarComponent,
    LoginFormComponent,
    CarruselPerrosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
