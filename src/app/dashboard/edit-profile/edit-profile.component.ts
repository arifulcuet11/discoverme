import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { MatDialog, MatBottomSheet } from '@angular/material';
import { DailogEditInfoComponent } from './dailog-edit-info/dailog-edit-info.component';
import { DailogEidtContactComponent } from './dailog-eidt-contact/dailog-eidt-contact.component';
import { AuthService } from 'src/app/share/services/login/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { ToastController } from '@ionic/angular';
import { AppConstant } from 'src/app/share/appconstant/appconstant';
import { LoadingService } from 'src/app/share/services/loader/loader.service';
import {File, IWriteOptions, FileEntry} from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  user: any;
  profileimage: any;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  constructor(private communicationService: CommunicationService,
              public dialog: MatDialog,
              private _bottomSheet: MatBottomSheet,
              private authservice: AuthService,
              private activeRouter: ActivatedRoute,
              private storageService: StorageService,
              public toastController: ToastController,
              private loadingService: LoadingService,
              private fileService: File,
              private camera: Camera) { }

  ngOnInit() {
    this.activeRouter.params.subscribe((params: Params) => {
      this.communicationService.showTopnavigationBar.emit(false);
      this.user = JSON.parse(this.storageService.getItem(this.storageService.User));
      this.profileimage =   'url(' + this.user.profilePicSrc + ')';
    });
  }

  async presentToast( msg: any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      color: 'dark'
    });
    toast.present();
  }
  openInfoBottomSheet(): void {
   const bottomSheet = this._bottomSheet.open(DailogEditInfoComponent, {
      data: this.user,
    });
   bottomSheet.afterDismissed().subscribe( result => {
       if (result) {
          this.user.name = result.name;
          this.user.genderId = result.genderId;
          this.storageService.setItem(this.storageService.User, JSON.stringify(this.user));
          this.presentToast('updated personal info.');
       }
    });
  }

  openContactBottomSheet(): void {
    const bottomSheet = this._bottomSheet.open(DailogEidtContactComponent, {
      data: this.user
    });
    bottomSheet.afterDismissed().subscribe( result => {
      if (result) {
         this.user.email = result.email;
         this.user.phoneNumber = result.phoneNumber;
         this.storageService.setItem(this.storageService.User, JSON.stringify(this.user));
         this.presentToast('updated personal info.');
      }
   });
  }
  backButton() {
    this.communicationService.showTopnavigationBar.emit(true);
  }

  uploadProfilePic(file: any) {
      this.loadingService.loadingPresent();
      this.authservice.uploadProfilePic(file).subscribe((res: any) => {
         this.user.profilePicSrc = res;
         this.profileimage =   'url(' + this.user.profilePicSrc + ')';
         this.storageService.setItem(this.storageService.User, JSON.stringify(this.user));
         this.presentToast(AppConstant.ProfilePicUpload);
         this.loadingService.loadingDismiss();
         window.location.reload();
      }, err => {
        this.presentToast(' uploaded fail.');
        this.loadingService.loadingDismiss();
      });
  }
  // getFormData() {
  //   const formData = new FormData();
  //   formData.append('image', this.file);
  //   return formData;
  // }
  readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      const formData = new FormData();
      formData.append('name', 'Hello');
      formData.append('image', imgBlob, file.name);
      this.uploadProfilePic(formData);
    };
    reader.readAsArrayBuffer(file);
  }
  // onFileChange(event) {
  //   if (event) {
  //     this.file = event.target.files[0];
  //     this.uploadProfilePic();
  //   } else {
  //     this.file = null;
  //   }
  // }
  takePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.fileService.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
        entry.file(file => {
          console.log(file);
          this.readFile(file);
        });
      });
    }, (err) => {
      // Handle error
    });
  }
}
