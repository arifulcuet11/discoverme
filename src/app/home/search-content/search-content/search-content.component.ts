import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonInfiniteScroll } from '@ionic/angular';
import { MatDialog } from '@angular/material';
import { DailogFilterOptionComponent } from '../dailog-filter-option/dailog-filter-option.component';
import { CatagoryService } from 'src/app/share/services/catagory/catagory.service';
import { Catagory } from 'src/app/catagory/models/catagory';
import { ContentService } from 'src/app/share/services/catagory/content/content.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss'],
})
export class SearchContentComponent implements OnInit {

  text = '';
  index = 0;
  pageSize = 10;
  catagoryIds: string;
  optionsId = 1;
  catagoryList: Catagory[] = [];
  contents: any = [];
  totalContentsList: any = [];
  optionList = [
    {
    id: 1,
    name: 'Most Popular',
    isChecked: true
  },
  {
    id: 2,
    name: 'Publish Date',
    isChecked: true
  },
  {
    id: 3,
    name: 'View Count',
    isChecked: true
  },
];
@ViewChild(IonInfiniteScroll, { static: false })
infiniteScroll: IonInfiniteScroll;

  constructor(  public modalController: ModalController,
                public dialog: MatDialog,
                private catagoryService: CatagoryService,
                private contentService: ContentService) { }

  ngOnInit() {
    this.getCatagory();
  }

  backButton() {
    this.modalController.dismiss();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DailogFilterOptionComponent, {
      width: '300px',
      data: {
        options: this.optionList,
        catagories: this.catagoryList
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.optionsId = result.optionId;
      this.catagoryList = result. catagoryList;
    });
  }
  filter() {
    this.openDialog();

  }
  getCatagory() {
    this.catagoryService.gets().subscribe((res: Catagory[]) => {
       this.catagoryList = res;
       this.catagoryList.forEach(ele => {
         ele.isChecked = true;
       });
       this.search(false);
    });
  }
  search(isScroling: boolean) {
    this.catagoryIds = '';
    this.catagoryList.forEach(ele => {
         if (ele.isChecked === true) {
           this.catagoryIds += ele.id + ',';
         }
       });
    this.catagoryIds += '0';
    this.contentService.MainSearch(this.text, this.index, this.pageSize, this.catagoryIds, this.optionsId).
    subscribe(res => {
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
}
