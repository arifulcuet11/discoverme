import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StorageService } from '../share/services/storage/storage.service';
import { CommunicationService } from '../share/services/communication/communication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute,
              private route: Router,
              private storageService: StorageService,
              private communicationService: CommunicationService) { }

  ngOnInit() {
    this.activeRouter.params.subscribe((params: Params) => {
      this.communicationService.showTopnavigationBar.emit(false);
      const isLogin = this.storageService.getItem(this.storageService.IsLogin) === 'true' ? true : false;
      if (!isLogin) {
         this.route.navigate(['/login']);
       }
    });
  }

  backButton() {
    this.communicationService.showTopnavigationBar.emit(true);
  }

}
