import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/share/services/catagory/content/content.service';
import { ContentLikeService } from 'src/app/share/services/content-like/content-like.service';
import { ContentLike } from '../models/content-like';
import { ContentAsReadService } from 'src/app/share/services/mark-as-read/content-as-read.service';
import { MarkAsRead } from '../models/mark-as-read';
import { ToastController } from '@ionic/angular';
import { AppConstant } from 'src/app/share/appconstant/appconstant';

@Component({
  selector: 'app-content-view-items',
  templateUrl: './content-view-items.component.html',
  styleUrls: ['./content-view-items.component.scss'],
})
export class ContentViewItemsComponent implements OnInit {
  content: any;
  itemPass: any;
  isLogin: any;
  contentLike: ContentLike;
  markAsReadModel: MarkAsRead;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  id: number;
  constructor(private communicationService: CommunicationService,
              private storageService: StorageService,
              private activeRoute: ActivatedRoute,
              private contentService: ContentService,
              private contentLikeService: ContentLikeService,
              private markAsReadService: ContentAsReadService,
              public toastController: ToastController) {
   }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params: ParamMap ) => {
      this.id = +params.get('id');
      this.getContent();
      this.updateViewCount();
      this.isLogin = this.storageService.getItem(this.storageService.IsLogin) === 'true' ? true : false;
    });
  }
  async getContent() {
    const model = JSON.parse(this.storageService.getItem(this.storageService.ItemView));
    this.content = model.content;
    await this.contentService.getById(this.id).subscribe(res => {
       this.content.totalLike = res.totalLike;
       this.content.totalRead = res.totalRead;
       this.content.totalComment = res.totalComment;
       this.content.contentLikeStatus = res.contentLikeStatus;
       this.content.markAsReadStatus = res.markAsReadStatus;
     });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: AppConstant.NotLoginMessage,
      duration: 1000,
      color: 'dark'
    });
    toast.present();
  }
 async markAsRead() {
   if (!this.isLogin) {
     this.presentToast();
     return 0;
   }
   this.markAsReadModel = {
      id : 0,
      status: this.content.markAsReadStatus === 1 ? 0 : 1,
      contentId: this.content.id
    };
   this.content.markAsReadStatus = this.content.markAsReadStatus === 1 ? 0 : 1;
   await this.markAsReadService.addMarkAsRead(this.markAsReadModel).subscribe(res => {

    });
  }
 async likedContent() {
  if (!this.isLogin) {
    this.presentToast();
    return 0;
  }
  this.contentLike = {
      id : 0,
      status: this.content.contentLikeStatus === 1 ? 0 : 1,
      contentId: this.content.id
    };
  this.content.contentLikeStatus = this.content.contentLikeStatus === 1 ? 0 : 1;
  this.content.totalLike = this.content.contentLikeStatus === 1 ?  this.content.totalLike + 1 : this.content.totalLike - 1;
  await this.contentLikeService.addContentLike(this.contentLike).subscribe( res => {

    });
  }
  async updateViewCount() {
      await this.contentService.updateViewCount(this.id).subscribe(res => {
      });
  }
}
