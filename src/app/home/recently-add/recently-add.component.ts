import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentService } from 'src/app/share/services/catagory/content/content.service';
import { IonInfiniteScroll, ToastController } from '@ionic/angular';
import { ContentLikeService } from 'src/app/share/services/content-like/content-like.service';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { Router } from '@angular/router';
import { AppConstant } from 'src/app/share/appconstant/appconstant';
import { LoadingService } from 'src/app/share/services/loader/loader.service';

@Component({
  selector: 'app-recently-add',
  templateUrl: './recently-add.component.html',
  styleUrls: ['./recently-add.component.scss'],
})
export class RecentlyAddComponent implements OnInit {
  index: any;
  pageSize: any;
  contents: any = [];
  totalContentsList: any = [];
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  isLogin: boolean;
  contentLike: { id: number; status: number; contentId: any; };
  constructor(private contentService: ContentService,
              public toastController: ToastController,
              private contentLikeService: ContentLikeService,
              private storageService: StorageService,
              private loadingService: LoadingService,
              private route: Router ) {}

  ngOnInit() {
    this.index = 0;
    this.pageSize = 10;
    this.getContent();
    this.loginCheck();
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
  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.getContent();
      if (this.contents.length === 1) {
        event.target.disabled = true;
      }
    }, 500);
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  getContent() {
    this.contentService
      .getRecent(this.index, this.pageSize)
      .subscribe((res) => {
        this.contents = res;
        this.totalContentsList = this.totalContentsList.concat(this.contents);
        this.index = this.index + 1;
        this.pageSize = 10;
      }, err => {
      });
  }
  viewItem(item: any) {
    const data = {
      type: 'content-type',
      content: item
    };
    this.storageService.setItem(this.storageService.ItemView, JSON.stringify(data));
    this.route.navigate(['/content-type/view/', item.id]);
  }
}
