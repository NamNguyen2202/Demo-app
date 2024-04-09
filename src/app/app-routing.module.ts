import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/client/home-page/home-page.component';
import { LoginPageComponent } from './component/client/login-page/login-page.component';

const routes: Routes = [
  {path: '', component : LoginPageComponent},
  {path: 'home-page', component : HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
