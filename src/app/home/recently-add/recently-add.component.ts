import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentService } from 'src/app/share/services/catagory/content/content.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-recently-add',
  templateUrl: './recently-add.component.html',
  styleUrls: ['./recently-add.component.scss'],
})
export class RecentlyAddComponent implements OnInit {
  index: any;
  pageSize: any;
  contents: any = [];
  totalContentsList: any = [];
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.index = 0;
    this.pageSize = 10;
    this.getContent();
  }
  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.getContent();
      if (this.contents.length === 1) {
        event.target.disabled = true;
      }
    }, 500);
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  getContent() {
    this.contentService
      .getRecent(this.index, this.pageSize)
      .subscribe((res) => {
        this.contents = res;
        this.totalContentsList = this.totalContentsList.concat(this.contents);
        this.index = this.index + 1;
        this.pageSize = 10;
      });
  }
}
