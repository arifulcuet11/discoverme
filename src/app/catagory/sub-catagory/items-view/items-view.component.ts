import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/share/services/catagory/content/content.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { RandomColor } from 'src/app/share/utility/random-color';
@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.scss'],
})
export class ItemsViewComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false} ) infiniteScroll: IonInfiniteScroll;
  constructor( private route: ActivatedRoute, private contentService: ContentService) { }
  index: any;
  pageSize: any;
  text = '';
  contents: any = [];
  totalContentsList: any = [];
  ngOnInit() {
    this.index = 0;
    this.pageSize = 10;
    this.getContent();
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
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
    this.contentService.Search(this.text, this.index, this.pageSize, 21).subscribe(res => {
      this.contents = res.contents;
      this.totalContentsList = this.totalContentsList.concat(this.contents);
      this.index = this.index + 1;
      this.pageSize = 10;
 });
  }
  getRandomColor(){
    return RandomColor.getRandomColor();
  }
}
