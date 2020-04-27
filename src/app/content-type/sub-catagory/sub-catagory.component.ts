import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from 'src/app/share/services/catagory/content/content.service';
import { SubCatagoryService } from 'src/app/share/services/catagory/subcatagory/sub-catagory.service';

@Component({
  selector: 'app-sub-catagory',
  templateUrl: './sub-catagory.component.html',
  styleUrls: ['./sub-catagory.component.scss'],
})
export class SubCatagoryComponent implements OnInit {
  id: any;
  subCatagories: any = [];
  allSubCatagory: any = [];
  text  = '';

  @Input()
  set catagoryId(id: number) {
    this.id = id;
  }
  get catagoryId() {
    return this.id;
  }

  constructor(private contentService: ContentService,
              private subCatagorySerice: SubCatagoryService) {}

  ngOnInit() {
    this.getSubCatagory();
  }

  getSubCatagory() {
    this.subCatagorySerice.getBycatagoryId(this.id).subscribe(res => {
         this.allSubCatagory = res;
         this.searchText('');
    });
  }
  searchText(text: string) {
    this.subCatagories = this.allSubCatagory.filter(x=> x.name.toLowerCase().includes(text));
  }
  clearSearch(event: any){
     this.searchText('');
  }
}
