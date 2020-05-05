import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContentService } from 'src/app/share/services/catagory/content/content.service';
import { MatDialog } from '@angular/material';
import { DailogFilterContentTypeComponent } from '../dailog-filter-content-type/dailog-filter-content-type.component';
import { IonInfiniteScroll, ToastController } from '@ionic/angular';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { AppConstant } from 'src/app/share/appconstant/appconstant';
import { ContentLikeService } from 'src/app/share/services/content-like/content-like.service';

@Component({
  selector: 'app-content-items',
  templateUrl: './content-items.component.html',
  styleUrls: ['./content-items.component.scss'],
})
export class ContentItemsComponent implements OnInit {
  id: number;
  headerName: string;
  text: string;
  index: number;
  pageSize: number;
  optionList = [
    {
      id: 1,
      name: 'Read',
      isChecked: true,
    },
    {
      id: 2,
      name: 'Unread',
      isChecked: true,
    },
  ];
  contents: any = [];
  totalContentsList: any = [];
  contentViewList: any = [];
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  isLogin: boolean;
  contentLike: { id: number; status: number; contentId: any; };
  constructor(
    private activeRoute: ActivatedRoute,
    private contentService: ContentService,
    public dialog: MatDialog,
    private route: Router,
    private communicationService: CommunicationService,
    private storageService: StorageService,
    public toastController: ToastController,
    private contentLikeService: ContentLikeService,
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.communicationService.showTopnavigationBar.emit(false);
      this.id = +params.get('id');
      this.headerName = params.get('name');
      this.loginCheck();
    });
    this.index = 0;
    this.text = '';
    this.pageSize = 10;
    this.search(false);
  }

  loginCheck() {
    this.isLogin = this.storageService.getItem(this.storageService.IsLogin) === 'false' ? false : true;
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: AppConstant.NotLoginMessage,
      duration: 1000,
      color: 'dark'
    });
    toast.present();
  }
 async likeContent(content: any) {
    if (!this.isLogin) {
      this.presentToast();
      return 0;
    }
    this.contentLike = {
        id : 0,
        status: content.contentLikeStatus === 1 ? 0 : 1,
        contentId: content.id
      };
    content.contentLikeStatus = content.contentLikeStatus === 1 ? 0 : 1;
    content.totalLike = content.contentLikeStatus === 1 ?  content.totalLike + 1 : content.totalLike - 1;
    await this.contentLikeService.addContentLike(this.contentLike).subscribe( res => {

      });
  }

  getFilterList() {
       if (this.optionList[0].isChecked && this.optionList[1].isChecked) {
         this.contentViewList = this.totalContentsList;
       } else if (this.optionList[0].isChecked) {
          this.contentViewList = this.totalContentsList.filter(x => x.markAsReadStatus === 1 );
       } else if (this.optionList[1].isChecked) {
        this.contentViewList = this.totalContentsList.filter(x => x.markAsReadStatus !== 1 );
       } else {
         this.contentViewList = [];
       }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DailogFilterContentTypeComponent, {
      width: '300px',
      data: {
        options: this.optionList,
      },
      disableClose: false
    });

    dialogRef.afterClosed().subscribe((result) => {
       this.optionList = result.options;
       this.getFilterList();
    });
  }

  filterOption() {
    this.openDialog();
  }
  search(isScroling: boolean) {
    this.contentService
      .Search(this.text, this.index, this.pageSize, this.id)
      .subscribe((res) => {
        this.contents = res;
        if (isScroling) {
          this.totalContentsList = this.totalContentsList.concat(this.contents);
        } else {
          this.totalContentsList = this.contents;
        }
        this.getFilterList();
      });
  }
  enterClick() {
    this.index = 0;
    this.pageSize = 10;
    this.search(false);
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.index = this.index + 1;
      this.pageSize = 10;
      this.search(true);
      if (this.contents.length === 1) {
        event.target.disabled = true;
      }
    }, 500);
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  viewItem(item: any) {
    const data = {
      type: 'content-type',
      index: this.index,
      pageSize: this.pageSize,
      content: item
    };
    this.storageService.setItem(this.storageService.ItemView, JSON.stringify(data));
    this.route.navigate(['/content-type/view/', item.id]);
  }
}
