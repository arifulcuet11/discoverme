import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../share/services/catagory/catagory.service';
import { Catagory } from './models/catagory';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.scss'],
})
export class CatagoryComponent implements OnInit {

  catagories: Catagory[] = [];
  constructor(private catagoryService: CatagoryService) { }

  ngOnInit() {

  }

  getCatagory() {
    this.catagoryService.gets().subscribe(res => {
         this.catagories = res;
     });
  }
  subCatagory() {

  }

}
