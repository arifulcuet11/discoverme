import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MatDialog } from '@angular/material';
import { DailogFilterOptionComponent } from '../dailog-filter-option/dailog-filter-option.component';
import { CatagoryService } from 'src/app/share/services/catagory/catagory.service';
import { Catagory } from 'src/app/catagory/models/catagory';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss'],
})
export class SearchContentComponent implements OnInit {

  catagoryList: Catagory[] = [];
  optionList = [
    {
    id: 1,
    name: 'Most Popular',
    isChecked: true
  },
  {
    id: 2,
    name: 'Recent Add',
    isChecked: true
  },
  {
    id: 2,
    name: 'View Count',
    isChecked: true
  },
];
  constructor(  public modalController: ModalController,
                public dialog: MatDialog,
                private catagoryService: CatagoryService, ) { }

  ngOnInit() {
    this.getCatagory();
  }

  backButton() {
    this.modalController.dismiss();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DailogFilterOptionComponent, {
      width: '250px',
      data: {
        options: this.optionList,
        catagories: this.catagoryList
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  filter() {
    this.openDialog();

  }
  getCatagory() {
    this.catagoryService.gets().subscribe((res: Catagory[]) => {
       this.catagoryList = res;
    });
  }
}
