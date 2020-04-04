import { Component, OnInit } from '@angular/core';
import { CatagoryService } from 'src/app/share/services/catagory/catagory.service';
import { Catagory } from 'src/app/catagory/models/catagory';

@Component({
  selector: 'app-home-catagory',
  templateUrl: './home-catagory.component.html',
  styleUrls: ['./home-catagory.component.scss'],
})
export class HomeCatagoryComponent implements OnInit {
  catagories: Catagory[] = [];
  constructor( private catagoryService: CatagoryService) { }

  ngOnInit() {
    this.getCatagory();
  }
  getCatagory() {
    this.catagoryService.gets().subscribe(res => {
      // tslint:disable-next-line: forin
      for (const obj in res) {
      const x = new Catagory();
      if (res.hasOwnProperty(obj)) {
         x.Name = obj;
         x.Id = res[x.Name];
         this.catagories.push(x);
       }
     }
     });
  }

}
