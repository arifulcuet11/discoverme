import { Component, OnInit } from '@angular/core';
import { SubCatagoryService } from 'src/app/share/services/catagory/subcatagory/sub-catagory.service';
import { ActivatedRoute } from '@angular/router';
import { SubCatagory } from '../models/subcatagory';
import { RandomColor } from 'src/app/share/utility/random-color';
import { CatagoryEnum } from 'src/app/share/utility/global-enum';

@Component({
  selector: 'app-sub-catagory',
  templateUrl: './sub-catagory.component.html',
  styleUrls: ['./sub-catagory.component.scss'],
})
export class SubCatagoryComponent implements OnInit {

  Id = 0;
  text: string;
  subcatagories: SubCatagory[] = [];
  catagory: any = CatagoryEnum;
  constructor(private subCatagoryService: SubCatagoryService, private route: ActivatedRoute) { }

  ngOnInit() {
        // tslint:disable-next-line: radix
        this.Id = parseInt(this.route.snapshot.paramMap.get('Id'));
        this.subCatagoryService.getBycatagoryId(this.Id).subscribe(res => {
          this.subcatagories = res;
        });
  }
  getRandomColor(){
    return RandomColor.getRandomColor();
  }
  search(event: any){
    //this.subcatagories
    this.text = event.target.value;
  }
}
