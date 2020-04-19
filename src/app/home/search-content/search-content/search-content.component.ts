import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss'],
})
export class SearchContentComponent implements OnInit {

  constructor(  public modalController: ModalController) { }

  ngOnInit() {}

  backButton(){
    this.modalController.dismiss();
  }

}
