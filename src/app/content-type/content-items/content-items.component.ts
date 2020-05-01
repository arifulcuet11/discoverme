import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContentService } from 'src/app/share/services/catagory/content/content.service';
import { MatDialog } from '@angular/material';
import { DailogFilterContentTypeComponent } from '../dailog-filter-content-type/dailog-filter-content-type.component';
import { IonInfiniteScroll } from '@ionic/angular';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { StorageService } from 'src/app/share/services/storage/storage.service';

@Component({
  selector: 'app-content-items',
  templateUrl: './content-items.component.html',
  styleUrls: ['./content-items.component.scss'],
})
export class ContentItemsComponent implements OnInit {
  id: number;
  headerName: string;
  text: string;
  index: number;
  pageSize: number;
  optionList = [
    {
      id: 1,
      name: 'Read',
      isChecked: true,
    },
    {
      id: 2,
      name: 'Unread',
      isChecked: true,
    },
  ];
  contents: any = [];
  totalContentsList: any = [];
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  constructor(
    private activeRoute: ActivatedRoute,
    private contentService: ContentService,
    public dialog: MatDialog,
    private route: Router,
    private communicationService: CommunicationService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.communicationService.showTopnavigationBar.emit(false);
      this.id = +params.get('id');
      this.headerName = params.get('name');
    });
    this.index = 0;
    this.text = '';
    this.pageSize = 10;
    this.search(false);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DailogFilterContentTypeComponent, {
      width: '300px',
      data: {
        options: this.optionList,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  filterOption() {
    this.openDialog();
  }
  search(isScroling: boolean) {
    this.contentService
      .Search(this.text, this.index, this.pageSize, this.id)
      .subscribe((res) => {
        this.contents = res;
        if (isScroling) {
          this.totalContentsList = this.totalContentsList.concat(this.contents);
        } else {
          this.totalContentsList = this.contents;
        }
      });
  }
  enterClick() {
    this.index = 0;
    this.pageSize = 10;
    this.search(false);
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.index = this.index + 1;
      this.pageSize = 10;
      this.search(true);
      if (this.contents.length === 1) {
        event.target.disabled = true;
      }
    }, 500);
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  viewItem(item: any){
    const data = {
      type: 'content-type',
      index: this.index,
      pageSize: this.pageSize,
      content: item
    };
    this.storageService.setItem(this.storageService.ItemView,JSON.stringify(data));
    this.route.navigate(['/content-type/view/', item.id]);
  }
}
