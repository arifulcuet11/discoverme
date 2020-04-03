import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPassowordComponent } from './forgot-passoword/forgot-passoword.component';
import { NgMatModule } from '../share/ngMat/ngMat.module';

const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'registration', component: RegistrationComponent },
   { path: 'forgot-password', component: ForgotPassowordComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginRoutingModule { }
