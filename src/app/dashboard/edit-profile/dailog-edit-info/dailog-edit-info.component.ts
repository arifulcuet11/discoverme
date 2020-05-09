import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/share/services/login/auth.service';

@Component({
  selector: 'app-dailog-edit-info',
  templateUrl: './dailog-edit-info.component.html',
  styleUrls: ['./dailog-edit-info.component.scss'],
})
export class DailogEditInfoComponent implements OnInit {
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
  constructor(private _bottomSheetRef: MatBottomSheetRef<DailogEditInfoComponent>,
              private fb: FormBuilder,
              private authService: AuthService,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
              }

  ngOnInit() {
    this.userEditForm.patchValue({
      name: this.data.name,
      genderId: this.data.genderId.toString(),
      email: this.data.email,
      phoneNumber: this.data.phoneNumber,
      profilePicSrc: this.data.profilePicSrc
    });
  }

  updateInfo() {
    this.userEditForm.value.genderId = Number(this.userEditForm.value.genderId);
    this.authService.updateInfo(this.userEditForm.value).subscribe( res => {
        this._bottomSheetRef.dismiss(this.userEditForm.value);
     });
  }

}
