import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dailog-filter-content-type',
  templateUrl: './dailog-filter-content-type.component.html',
  styleUrls: ['./dailog-filter-content-type.component.scss'],
})
export class DailogFilterContentTypeComponent implements OnInit {

  optionList: any;
  constructor(public dialogRef: MatDialogRef<DailogFilterContentTypeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.optionList = this.data.options;
  }
  clear() {
    this.dialogRef.close({
      options: this.optionList
    });
  }
}
