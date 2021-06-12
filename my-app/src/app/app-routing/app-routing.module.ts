import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ToggleComponent } from '../toggle/toggle.component';
import { LoginComponent } from '../routes/login/login.component';
import { RegisterComponent } from '../routes/register/register.component';
import { PasswordComponent } from '../routes/password/password.component';
import { ChartsComponent } from '../routes/charts/charts.component';

const routes: Routes = [
{path:'',component:NavbarComponent},
{path:'static',component:ToggleComponent,pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'changepassword',component:PasswordComponent},
{path:'charts',component:ChartsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports:[RouterModule]
})


export class AppRoutingModule { }
