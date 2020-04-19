import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { Language, MenuList } from '../dailog-language/models/language';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';


@Component({
  selector: 'app-menu-before-signin',
  templateUrl: './menu-before-signin.component.html',
  styleUrls: ['./menu-before-signin.component.scss'],
})
export class MenuBeforeSigninComponent implements OnInit {
  language: any;
  menuList: any = [];
  constructor(private router: Router,
              private menu: MenuController,
              private storageService: StorageService,
              private communicationService: CommunicationService) { }

  ngOnInit() {
    this.init();
  }
  login() {
    this.router.navigate(['/login']);
    this.menu.close();
  }
  init() {
    const res =  this.storageService.getItem(this.storageService.LanguageId);
    if (res) {
       this.menuList = parseInt(res) === Language.Bangla ? new MenuList().getBeforeBanglaMenuList()
        : new MenuList().getBeforeEnglistMenuList();
    } else {
         this.storageService.setItem(this.storageService.LanguageId, Language.English);
         this.menuList = new MenuList().getBeforeEnglistMenuList();
    }
    this.language = this.communicationService.languageInfo.subscribe( res => {
      this.menuList = res === Language.Bangla ? new MenuList().getBeforeBanglaMenuList() : new MenuList().getBeforeEnglistMenuList();
    });
  }

}
