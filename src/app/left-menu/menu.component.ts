import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DailogLanguageComponent } from './dailog-language/dailog-language.component';
import { MenuController } from '@ionic/angular';
import { MenuList, Language } from './dailog-language/models/language';
import { CommunicationService } from '../share/services/communication/communication.service';
import { StorageService } from '../share/services/storage/storage.service';
import { Router } from '@angular/router';
import { MessageService } from '../share/services/message/message.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  language: any;
  user: any;
  userlogin: any;
  menuList: any = [];
  constructor(public dialog: MatDialog,
              private menu: MenuController,
              private router: Router,
              private communicationService: CommunicationService,
              private  messagingService: MessageService,
              private storageService: StorageService) { }

  ngOnInit() {
   this.user = JSON.parse(this.storageService.getItem(this.storageService.User));
   this.init();
  }

  init() {
    const res =  this.storageService.getItem(this.storageService.LanguageId);
    if (res) {
       this.menuList = parseInt(res) === Language.Bangla ? new MenuList().getBanglaMenuList() : new MenuList().getEnglistMenuList();
    } else {
         this.storageService.setItem(this.storageService.LanguageId, Language.English);
         this.menuList = new MenuList().getEnglistMenuList();
    }
    this.language = this.communicationService.languageInfo.subscribe( res => {
      this.menuList = res === Language.Bangla ? new MenuList().getBanglaMenuList() : new MenuList().getEnglistMenuList();
    });

    this.userlogin = this.communicationService.loginLogoutInfo.subscribe( res => {
       this.user = this.storageService.getItem(this.storageService.User);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DailogLanguageComponent, {
      width: '250px',
      data: []
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  clickMenu(menu: any) {
    this.menu.close();
    if (menu.code === 'M-01') {
      this.router.navigate(['/home']);
    } else if (menu.code === 'M-02') {
      this.router.navigate(['/dashboard']);
    } else if (menu.code === 'M-03') {
      this.router.navigate(['/notification']);
    } else if (menu.code === 'M-04') {
      this.router.navigate(['/book-mark']);
    } else if (menu.code === 'M-05') {
      this.openDialog();
    } else if (menu.code === 'M-06') {
       this.messagingService.presentToast('share me', 'black');
    } else if (menu.code === 'M-07') {
      this.messagingService.presentToast('Rated me', 'black');
    }
  }

}
