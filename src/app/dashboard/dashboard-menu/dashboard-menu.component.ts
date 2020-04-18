import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
})
export class DashboardMenuComponent implements OnInit {

  constructor(private communicationService: CommunicationService,
              private storageService: StorageService,
              private route: Router) { }

  ngOnInit() {
    
  }
  logout() {
        this.storageService.removeItem(this.storageService.TOKEN_KEY);
        this.storageService.setItem(this.storageService.IsLogin, false);
        this.communicationService.loginLogoutInfo.emit(false);
        this.route.navigate(['/login']);
  }
}
