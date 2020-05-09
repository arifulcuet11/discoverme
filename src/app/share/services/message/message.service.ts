import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public  changePassword = 'password has been changed.' ;
  public  changePasswordFail = 'password changed failed.' ;
  constructor( public toastController: ToastController) { }
  async presentToast( msg: any, tColor: any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      color: tColor
    });
    toast.present();
  }
}
