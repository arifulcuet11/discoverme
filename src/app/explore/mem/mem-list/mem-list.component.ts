import { Component, OnInit, ViewChild } from '@angular/core';
import { MemService } from 'src/app/share/services/mem/mem.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { LoadingService } from 'src/app/share/services/loader/loader.service';
import { AppConstant } from 'src/app/share/appconstant/appconstant';

@Component({
  selector: 'app-mem-list',
  templateUrl: './mem-list.component.html',
  styleUrls: ['./mem-list.component.scss'],
})
export class MemListComponent implements OnInit {
  id: number;
  mems: any = [];
  headerName: string;
  index: number;
  text: string;
  pageSize: number;
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  memsList: any = [];
  constructor( private loadingService: LoadingService,
               private memService: MemService,
               private activeRoute: ActivatedRoute,
               private photoViewer: PhotoViewer,
               private communicationService: CommunicationService,
             ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params: ParamMap ) => {
      this.id = +params.get('id');
      this.headerName = params.get('name');
      this.communicationService.showTopnavigationBar.emit(false);
      this.index = 0;
      this.text = '';
      this.pageSize = 100;
      this.memsList = [];
      this.search();
    });
  }

  getByMemTypeId() {
     this.memService.getByMemTypeId(this.id).subscribe(res => {
       this.mems = res;
     });
  }
  search() {
    this.loadingService.loadingPresent();
    this.memService.search(this.text, this.index, this.pageSize, this.id).subscribe(res => {
      this.mems = res.mems;
      this.memsList = this.memsList.concat(this.mems);
      this.index = this.index + 1;
      this.loadingService.loadingDismiss();
    }, err => {
      this.loadingService.loadingDismiss();
    });
  }
  viewPhoto(item: any) {
    this.photoViewer.show(item.url, item.name, {share: true});
  }
  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.index = this.index + 1;
      this.pageSize = 10;
      this.search();
      if (this.mems.length === 1) {
        event.target.disabled = true;
      }
    }, 500);
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  enterClick() {
    this.index = 0;
    this.memsList = [];
    this.search();
  }
  doRefresh(event) {
    event.target.complete();
    this.index = 0;
    this.memsList = [];
    this.search();
}
}
