import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/share/services/login/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/share/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password:  ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private storageService: StorageService,
              private route: Router) { }

  ngOnInit() {}

  login() {
     this.authService.login(this.loginForm.value).subscribe(res => {
      this.storageService.setItem(this.storageService.TOKEN_KEY, res.token);
      this.storageService.setItem(this.storageService.ExpireDate, res.expireTime);
      setTimeout(() => {
        this.route.navigate(['/home']);
      }, 1000);

     });
  }
}
