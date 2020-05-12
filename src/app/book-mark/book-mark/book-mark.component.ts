import { Component, OnInit } from '@angular/core';
import { CatagoryService } from 'src/app/share/services/catagory/catagory.service';
import { Catagory } from 'src/app/catagory/models/catagory';
import { BookMarkService } from 'src/app/share/services/book-mark/book-mark.service';

@Component({
  selector: 'app-book-mark',
  templateUrl: './book-mark.component.html',
  styleUrls: ['./book-mark.component.scss'],
})
export class BookMarkComponent implements OnInit {
  catagories: Catagory[] = [];
  index = 0 ;
  size = 1000 ;
  bookMarkList: any;
  constructor(private catagoryService: CatagoryService,
              private bookMarkService: BookMarkService) { }
  ngOnInit() {
    this.getCatagories();
    this.getBookMarklist();
  }

  getCatagories() {
    this.catagoryService.gets().subscribe( res => {
      this.catagories = res;
    });
  }
  getBookMarklist() {
    this.bookMarkService.gets(this.index, this.size).subscribe(res => {
      this.bookMarkList = res;
    });
  }


}
