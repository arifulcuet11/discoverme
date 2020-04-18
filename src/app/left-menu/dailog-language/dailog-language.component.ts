import { Component, OnInit } from '@angular/core';
import { Language } from './models/language';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { MatDialogRef, MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-dailog-language',
  templateUrl: './dailog-language.component.html',
  styleUrls: ['./dailog-language.component.scss'],
})
export class DailogLanguageComponent implements OnInit {
  languageId: any;
  language = Language;
  constructor(private storageService: StorageService,
              private communicationService: CommunicationService,
              public dialogRef: MatDialogRef<DailogLanguageComponent>) { }

  ngOnInit() {
    const res = this.storageService.getItem(this.storageService.LanguageId);
    if (res) {
       this.languageId = parseInt(res);
    } else {
      this.languageId = this.language.English;
    }

  }

  languageChange(event: MatRadioChange) {
      this.communicationService.languageInfo.emit(event.value);
      this.storageService.setItem(this.storageService.LanguageId, event.value);
      this.dialogRef.close(); 
  }

}
