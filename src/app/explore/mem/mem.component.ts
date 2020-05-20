import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { MemTypeService } from 'src/app/share/services/mem-type/mem-type.service';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-mem',
  templateUrl: './mem.component.html',
  styleUrls: ['./mem.component.scss'],
})
export class MemComponent implements OnInit {
  images: any = [1, 2, 3, , 4, 5];
  memTypes: any = [];
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 3,
    autoplay: true
   };
  constructor(private photoViewer: PhotoViewer,
              private memTypeService: MemTypeService,
              private activeRoute: ActivatedRoute,
              private communicationService: CommunicationService) { }

  ngOnInit() {
    this.getAll();
    this.activeRoute.paramMap.subscribe((params: ParamMap ) => {
      this.communicationService.showTopnavigationBar.emit(true);
    });
  }

  viewPhoto(img: any) {
    this.photoViewer.show(img);
  }

  getAll() {
    this.memTypeService.getAll().subscribe(res => {
       this.memTypes = res;
    });
  }
}
