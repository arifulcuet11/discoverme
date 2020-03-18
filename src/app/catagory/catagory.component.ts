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
     console.log(this.catagories);
    });
  }

  subCatagory(){
    
  }

}
