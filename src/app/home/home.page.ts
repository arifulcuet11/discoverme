import { Component, OnInit } from '@angular/core';
import { StorageService } from '../share/services/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isLogin: any;
  constructor(private storageService: StorageService) {
    this.isLogin = this.storageService.getItem(this.storageService.IsLogin);
  }
  ngOnInit() {
   
  }
}
