import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/share/services/login/auth.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private route: Router,
    private activeRouter: ActivatedRoute,
    private communicationService: CommunicationService
  ) {}

  ngOnInit() {
    this.activeRouter.params.subscribe((params: Params) => {
      this.communicationService.showTopnavigationBar.emit(false);
    });
  }
  backButton() {
    this.communicationService.showTopnavigationBar.emit(true);
  }
  login() {
    this.authService.login(this.loginForm.value).subscribe((res) => {
      this.storageService.setItem(this.storageService.TOKEN_KEY, res.token);
      this.storageService.setItem(
        this.storageService.ExpireDate,
        res.expireTime
      );
      setTimeout(() => {
        this.route.navigate(['/home']);
      }, 1000);
    });
  }
}
