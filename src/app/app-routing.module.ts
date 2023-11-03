import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./pages/home/home.module').then((module)=>module.HomeModule)
  },
  {
    path:'login',
    loadChildren:() => import('./pages/login/login.module').then((module)=>module.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
