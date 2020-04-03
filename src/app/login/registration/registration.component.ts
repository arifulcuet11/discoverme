import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/share/services/login/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  error: any = [];
  registrationForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password:  ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, {validator: this.passwordConfirming});
  constructor(private authService: AuthService, private fb: FormBuilder,
              private route: Router) { }

  @Output() submitEM = new EventEmitter();

  ngOnInit() {}
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return {invalid: true};
    }
}
  submit() {
    this.authService.signUp(this.registrationForm.value).subscribe(res => {
       this.route.navigate(['/login']);
    }, (err => {
       this.error = err.error.split(',');
       console.log(this.error);
    }));
  }
}
