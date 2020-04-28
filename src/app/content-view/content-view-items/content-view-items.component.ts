import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { StorageService } from 'src/app/share/services/storage/storage.service';

@Component({
  selector: 'app-content-view-items',
  templateUrl: './content-view-items.component.html',
  styleUrls: ['./content-view-items.component.scss'],
})
export class ContentViewItemsComponent implements OnInit {
  content: any;
  itemPass: any;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private communicationService: CommunicationService,
              private storageService: StorageService) {
   }

  ngOnInit() {
    this.getContent();
  }
  getContent() {
    debugger;
    const model = JSON.parse(this.storageService.getItem(this.storageService.ItemView));
    this.content = model.content;
  }
}
