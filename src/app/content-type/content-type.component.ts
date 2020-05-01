import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { CommunicationService } from '../share/services/communication/communication.service';

@Component({
  selector: 'app-content-type',
  templateUrl: './content-type.component.html',
  styleUrls: ['./content-type.component.scss'],
})
export class ContentTypeComponent implements OnInit {
   id: number;
   headerName: string;
  constructor(private activeRoute: ActivatedRoute,
              private communicationService: CommunicationService) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params: ParamMap ) => {
      // tslint:disable-next-line: radix
      this.id = +params.get('id');
      this.headerName = params.get('name');
      this.communicationService.showTopnavigationBar.emit(false);
    });
  }

}
