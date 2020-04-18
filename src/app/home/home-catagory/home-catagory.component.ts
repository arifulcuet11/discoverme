import { Component, OnInit } from '@angular/core';
import { CatagoryService } from 'src/app/share/services/catagory/catagory.service';
import { Catagory } from 'src/app/catagory/models/catagory';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { Language } from 'src/app/left-menu/dailog-language/models/language';

@Component({
  selector: 'app-home-catagory',
  templateUrl: './home-catagory.component.html',
  styleUrls: ['./home-catagory.component.scss'],
})
export class HomeCatagoryComponent implements OnInit {
  catagories: Catagory[] = [];
  constructor( private catagoryService: CatagoryService,
               private storageService: StorageService,
               private communicationService: CommunicationService) { }
  languageEmiter: any;
  languageId: number;
  language = Language;
  ngOnInit() {
    this.init();
    this.getCatagory();
  }
  getCatagory() {
    this.catagoryService.gets().subscribe(res => {
       this.catagories = res;
     });
  }

  init() {
    const res =  this.storageService.getItem(this.storageService.LanguageId);
    if (res) {
       if (parseInt(res) === Language.Bangla) {
            this.languageId = Language.Bangla;
        }
    } else {
        this.languageId = Language.English;
    }
    this.languageEmiter = this.communicationService.languageInfo.subscribe( res => {
      this.languageId = res === Language.Bangla ? Language.Bangla : Language.English;
    });
  }

}
