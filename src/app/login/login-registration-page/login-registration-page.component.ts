import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login-registration-page',
  templateUrl: './login-registration-page.component.html',
  styleUrls: ['./login-registration-page.component.scss'],
})
export class LoginRegistrationPageComponent implements OnInit {

  constructor( private communicationService: CommunicationService,
               private activeRouter: ActivatedRoute, ) { }

  ngOnInit() {  this.activeRouter.params.subscribe((params: Params) => {
    this.communicationService.showTopnavigationBar.emit(false);
  });

  }

}
