import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/share/services/catagory/content/content.service';
import { TopContent } from './model/top-content';

@Component({
  selector: 'app-top-story',
  templateUrl: './top-story.component.html',
  styleUrls: ['./top-story.component.scss'],
})
export class TopStoryComponent implements OnInit {

  topContents: TopContent[] = [];
  topCatagory: any ;
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getTop5Content();
  }
  getTop5Content() {
    this.contentService.getTop5().subscribe(res => {
       this.topContents = res;
       this.topCatagory = Array.from(new Set(this.topContents.map(s => s.catagoryId))).map(catagoryId => {
           return {
             id: catagoryId,
             name: this.topContents.filter(x => x.catagoryId === catagoryId)[0].catagoryName,
             colorCode: this.topContents.filter(x => x.catagoryId === catagoryId)[0].colorCode,
           };
       });
       console.log(this.topCatagory);
    });
  }

}
