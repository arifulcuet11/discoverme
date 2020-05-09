import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { AuthService } from 'src/app/share/services/login/auth.service';
import { MessageService } from 'src/app/share/services/message/message.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {

  currHide = true;
  newHide = true;
  conHide = true;
  changePasswordForm = this.fb.group({
    email: [null, [Validators.required]],
    newPassword: [null,  [Validators.required]],
    confirmPassword: [null,  [Validators.required]],
    password: [null,  [Validators.required] ]
  },
  { validator: this.passwordConfirming });
  user: any;
  constructor(   private fb: FormBuilder,
                 private activeRouter: ActivatedRoute,
                 private storageService: StorageService,
                 private authService: AuthService,
                 private route: Router,
                 private messageService: MessageService ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe((params: Params) => {
      this.user = JSON.parse(this.storageService.getItem(this.storageService.User));
      this.changePasswordForm.patchValue({
        email: this.user.email
      });
    });
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('newPassword').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    }
  }
  changePasword() {
    this.authService.changePassword(this.changePasswordForm.value).subscribe(res => {
         this.storageService.removeItem(this.storageService.TOKEN_KEY);
         this.storageService.removeItem(this.storageService.User);
         this.messageService.presentToast(this.messageService.changePassword, 'dark');
         this.route.navigate(['/login/display']);
    }, err => {
      this.messageService.presentToast(this.messageService.changePasswordFail, 'danger');
    });
  }

}
