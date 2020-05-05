import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { StorageService } from '../share/services/storage/storage.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModalController, MenuController } from '@ionic/angular';
import { SearchContentComponent } from './search-content/search-content/search-content.component';
import { MatTabGroup, MatTab } from '@angular/material';
import $ from 'jquery';
import { CommunicationService } from '../share/services/communication/communication.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(MatTabGroup, { static: true }) group;
  @ViewChildren(MatTab) tabs;
  // tslint:disable-next-line: variable-name
  tab_num = 0;
  selected = 0;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  constructor(private storageService: StorageService,
              public modalController: ModalController,
              private menu: MenuController,
              private activeRouter: ActivatedRoute,
              private communicationService: CommunicationService,
              private router: Router) {
  }
  ngOnInit() {
    this.activeRouter.params.subscribe((params: Params) => {
      this.communicationService.showTopnavigationBar.emit(true);
    });

  }
  doRefresh(event) {
      event.target.complete();
      window.location.reload();
  }
  async searchModel() {
    const modal = await this.modalController.create({
      component: SearchContentComponent
    });
    return await modal.present();
  }
}
