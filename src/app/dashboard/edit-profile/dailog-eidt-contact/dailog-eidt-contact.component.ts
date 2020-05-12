import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { AuthService } from 'src/app/share/services/login/auth.service';
import { LoadingService } from 'src/app/share/services/loader/loader.service';
import { MessageService } from 'src/app/share/services/message/message.service';

@Component({
  selector: 'app-dailog-eidt-contact',
  templateUrl: './dailog-eidt-contact.component.html',
  styleUrls: ['./dailog-eidt-contact.component.scss'],
})
export class DailogEidtContactComponent implements OnInit {
  userEditForm = this.fb.group({
    id: [0],
    name : ['', Validators.required],
    genderId: [1, Validators.required],
    email: ['', [Validators.required]],
    phoneNumber: [''],
    profilePicSrc: [''],
    address: [''],
    password: ['xcsafsa']
  });
  constructor( private fb: FormBuilder,
               @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
               private _bottomSheetRef: MatBottomSheetRef<DailogEidtContactComponent>,
               private authService: AuthService,
               private messageService: MessageService,
               private loadingService: LoadingService,
              ) { }

  ngOnInit() {
    this.userEditForm.patchValue({
      name: this.data.name,
      genderId: Number(this.data.genderId),
      email: this.data.email,
      phoneNumber: this.data.phoneNumber,
      profilePicSrc: this.data.profilePicSrc
    });
  }

  updateInfo() {
    this.loadingService.loadingPresent();
    this.userEditForm.value.genderId = Number(this.userEditForm.value.genderId);
    this.authService.updateInfo(this.userEditForm.value).subscribe( res => {
        this._bottomSheetRef.dismiss(this.userEditForm.value);
        this.loadingService.loadingDismiss();
     }, err => {
        this.messageService.presentToast(this.messageService.generalFail, 'danger');
        this.loadingService.loadingDismiss();
     });
  }

}
