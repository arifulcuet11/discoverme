import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from 'src/app/share/services/login/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { MessageService } from 'src/app/share/services/message/message.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  error: any = [];
  registrationForm = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      userType: [1]
    },
    { validator: this.passwordConfirming }
  );
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private route: Router,
    private activeRouter: ActivatedRoute,
    private messageService: MessageService,
    private communicationService: CommunicationService
  ) {}

  @Output() submitEM = new EventEmitter();

  ngOnInit() {
    this.activeRouter.params.subscribe((params: Params) => {
      this.communicationService.showTopnavigationBar.emit(false);
    });
  }
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    }
  }
  submit() {
    this.authService.signUp(this.registrationForm.value).subscribe(
      (res) => {
        this.route.navigate(['/login']);
      },
      (err) => {
        this.messageService.presentToast(err.error, 'dark');
      }
    );
  }
  backButton() {
    this.communicationService.showTopnavigationBar.emit(true);
  }
}
