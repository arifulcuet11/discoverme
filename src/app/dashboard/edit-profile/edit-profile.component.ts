import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {}
  backButton() {
    this.communicationService.showTopnavigationBar.emit(true);
  }
}
