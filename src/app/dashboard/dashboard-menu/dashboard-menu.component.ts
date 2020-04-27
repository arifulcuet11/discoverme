import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
})
export class DashboardMenuComponent implements OnInit {
  user: any;
  constructor(private communicationService: CommunicationService,
              private storageService: StorageService,
              private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit() {

     this.router.params.subscribe(res => {
      this.user = JSON.parse(this.storageService.getItem(this.storageService.User));
     });
  }
  logout() {
        this.storageService.removeItem(this.storageService.TOKEN_KEY);
        this.storageService.removeItem(this.storageService.User);
        this.storageService.setItem(this.storageService.IsLogin, false);
        this.communicationService.loginLogoutInfo.emit(false);
        this.route.navigate(['/login']);
  }
}
