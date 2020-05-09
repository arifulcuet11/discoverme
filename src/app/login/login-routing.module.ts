import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPassowordComponent } from './forgot-passoword/forgot-passoword.component';
import { LoginRegistrationPageComponent } from './login-registration-page/login-registration-page.component';


const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'registration', component: RegistrationComponent },
   { path: 'forgot-password', component: ForgotPassowordComponent },
   { path: 'display', component: LoginRegistrationPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginRoutingModule { }
