import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { StorageService } from '../share/services/storage/storage.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IImage } from 'ng-simple-slideshow';
import { ModalController, MenuController } from '@ionic/angular';
import { SearchContentComponent } from './search-content/search-content/search-content.component';
import { CatagoryService } from '../share/services/catagory/catagory.service';
import { Catagory } from '../catagory/models/catagory';
import { MatTabGroup, MatTab } from '@angular/material';
import $ from 'jquery';
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
              private activeRouter: ActivatedRoute,
              public modalController: ModalController,
              private catagoryService: CatagoryService,
              private menu: MenuController) {
  }
  ngOnInit() {

  }
  swipe(eType) {
    this.tab_num = this.tabs.length;
    if (eType === this.SWIPE_ACTION.LEFT && this.selected >= 0 && this.selected < this.tab_num - 1) {
      this.selected++;
    } else if (eType === this.SWIPE_ACTION.RIGHT && this.selected > 0) {
      this.selected --;
    }
    console.log(this.selected);
  }
  async searchModel() {
    const modal = await this.modalController.create({
      component: SearchContentComponent
    });
    return await modal.present();
  }
}
