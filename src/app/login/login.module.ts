import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPassowordComponent } from './forgot-passoword/forgot-passoword.component';
import { NgMatModule } from '../share/ngMat/ngMat.module';
import { IonicModule } from '@ionic/angular';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ForgotPassowordComponent],
  imports: [
    CommonModule,
    NgMatModule,
    IonicModule,
    LoginRoutingModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  entryComponents: [],
})
export class LoginModule { }
