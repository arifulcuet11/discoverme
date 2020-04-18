import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DailogLanguageComponent } from './dailog-language/dailog-language.component';
import { MenuController } from '@ionic/angular';
import { MenuList, Language } from './dailog-language/models/language';
import { CommunicationService } from '../share/services/communication/communication.service';
import { StorageService } from '../share/services/storage/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  language: any;
  menuList: any = [];
  constructor(public dialog: MatDialog,
              private menu: MenuController,
              private communicationService: CommunicationService,
              private storageService: StorageService) { }

  ngOnInit() {
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
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DailogLanguageComponent, {
      width: '250px',
      data: []
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  clickMenu(menuId: number) {
    if (menuId === 5) {
      this.menu.close();
      this.openDialog();
    }
  }

}
