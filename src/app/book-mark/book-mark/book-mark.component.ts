import { Component, OnInit } from '@angular/core';
import { CatagoryService } from 'src/app/share/services/catagory/catagory.service';
import { Catagory } from 'src/app/catagory/models/catagory';
import { BookMarkService } from 'src/app/share/services/book-mark/book-mark.service';
import { MessageService } from 'src/app/share/services/message/message.service';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoadingService } from 'src/app/share/services/loader/loader.service';
import { ContentLikeService } from 'src/app/share/services/content-like/content-like.service';
import { CommunicationService } from 'src/app/share/services/communication/communication.service';

@Component({
  selector: 'app-book-mark',
  templateUrl: './book-mark.component.html',
  styleUrls: ['./book-mark.component.scss'],
})
export class BookMarkComponent implements OnInit {
  catagories: Catagory[] = [];
  index = 0 ;
  size = 1000 ;
  bookMarkList: any;
  contentLike: { id: number; status: number; contentId: any; };
  constructor(private catagoryService: CatagoryService,
              private bookMarkService: BookMarkService,
              private messageService: MessageService,
              private storageService: StorageService,
              private activeRouter: ActivatedRoute,
              private loadingService: LoadingService,
              private contentLikeService: ContentLikeService,
              private communicationService: CommunicationService,
              private route: Router) { }
  ngOnInit() {
    this.activeRouter.params.subscribe((params: Params) => {
      const isLogin = this.storageService.getItem(this.storageService.IsLogin) === 'true' ? true : false;
      if (!isLogin) {
           this.route.navigate(['/login/display']);
         } else {
      }
      this.communicationService.showTopnavigationBar.emit(true);
      });
    this.getCatagories();
    this.getBookMarklist();
  }

  getCatagories() {
    this.loadingService.loadingPresent();
    this.catagoryService.gets().subscribe( res => {
      this.catagories = res;
    });
  }
  getBookMarklist() {
    this.bookMarkService.gets(this.index, this.size).subscribe(res => {
      this.bookMarkList = res;
      this.loadingService.loadingDismiss();
    }, err => {
      this.loadingService.loadingDismiss();
    });
  }

  deleteBookMark(id: number) {
    this.bookMarkService.delete(id).subscribe(res => {
       this.messageService.presentToast('removed bookmark.', 'dark');
       this.getBookMarklist();
    });
  }
  viewItem(item: any) {
    const data = {
      type: 'content-type',
      content: item,
      hrefb: '/book-mark'
    };
    this.storageService.setItem(this.storageService.ItemView, JSON.stringify(data));
    this.route.navigate(['/content-type/view/', item.id]);
  }
  async likeContent(item) {
    this.contentLike = {
        id : 0,
        status: item.contentLikeStatus === 1 ? 0 : 1,
        contentId: item.id
      };
    item.contentLikeStatus = item.contentLikeStatus === 1 ? 0 : 1;
    item.totalLike = item.contentLikeStatus === 1 ?  item.totalLike + 1 : item.totalLike - 1;
    await this.contentLikeService.addContentLike(this.contentLike).subscribe(res => {
      this.messageService.presentToast(item.contentLikeStatus === 1 ? 'liked' : 'unliked', 'dark');
     });
    }
    doRefresh(event) {
      event.target.complete();
      window.location.reload();
  }
}
