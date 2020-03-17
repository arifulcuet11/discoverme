import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../share/services/catagory/catagory.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.scss'],
})
export class CatagoryComponent implements OnInit {

  constructor(private catagoryService: CatagoryService) { }

  ngOnInit() {

    let x = this.catagoryService.gets().subscribe(res=>{
       console.log(x)
    })
  }

}
