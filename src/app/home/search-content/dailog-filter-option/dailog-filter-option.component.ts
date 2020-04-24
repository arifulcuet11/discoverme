import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CatagoryService } from 'src/app/share/services/catagory/catagory.service';
import { Catagory } from 'src/app/catagory/models/catagory';

@Component({
  selector: 'app-dailog-filter-option',
  templateUrl: './dailog-filter-option.component.html',
  styleUrls: ['./dailog-filter-option.component.scss'],
})
export class DailogFilterOptionComponent implements OnInit {
  optionList = [];
  catagoryList: Catagory[] =[];
  constructor(private catagoryService: CatagoryService,
              public dialogRef: MatDialogRef<DailogFilterOptionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
   this.optionList = this.data.options;
   this.catagoryList = this.data.catagories;
  }


  clear() {
    this.dialogRef.close({
      optionList: this.optionList,
      catagoryList: this.catagoryList
    });
  }

}
