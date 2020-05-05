import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/share/services/catagory/content/content.service';
import { TopContent } from './model/top-content';
import { ToastController } from '@ionic/angular';
import { ContentLikeService } from 'src/app/share/services/content-like/content-like.service';
import { AppConstant } from 'src/app/share/appconstant/appconstant';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-story',
  templateUrl: './top-story.component.html',
  styleUrls: ['./top-story.component.scss'],
})
export class TopStoryComponent implements OnInit {

  topContents: TopContent[] = [];
  topCatagory: any ;
  isLogin: any;
  contentLike: { id: number; status: number; contentId: any; };
  constructor(private contentService: ContentService,
              public toastController: ToastController,
              private contentLikeService: ContentLikeService,
              private storageService: StorageService,
              private route: Router ) { }

  ngOnInit() {
    this.getTop5Content();
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
  getTop5Content() {
    this.contentService.getTop5().subscribe(res => {
       this.topContents = res;
       this.topCatagory = Array.from(new Set(this.topContents.map(s => s.catagoryId))).map(catagoryId => {
           return {
             id: catagoryId,
             name: this.topContents.filter(x => x.catagoryId === catagoryId)[0].catagoryName,
             colorCode: this.topContents.filter(x => x.catagoryId === catagoryId)[0].colorCode,
           };
       });
       console.log(this.topCatagory);
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
