import { Component, OnInit } from '@angular/core';
import { StorageService } from '../share/services/storage/storage.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IImage } from 'ng-simple-slideshow';
import { ModalController } from '@ionic/angular';
import { SearchContentComponent } from './search-content/search-content/search-content.component';
import { CatagoryService } from '../share/services/catagory/catagory.service';
import { Catagory } from '../catagory/models/catagory';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isLogin: any;
  catagories: Catagory[] = [];
  imageUrls: (string | IImage)[] = [
    // tslint:disable-next-line: max-line-length
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg', caption: 'The first slide', href: '/login' },
    // tslint:disable-next-line: max-line-length
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg', clickAction: () => alert('custom click function') },
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg', caption: 'Apple TV', href: 'https://www.apple.com/' },
    'https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg',
    { url: 'assets/kitties.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
  ];
  height = '100px';
  minHeight: string;
  arrowSize = '30px';
  showArrows = false;
  disableSwiping = false;
  autoPlay = true;
  autoPlayInterval = 3333;
  stopAutoPlayOnSlide = true;
  debug = false;
  backgroundSize = 'cover';
  backgroundPosition = 'center center';
  backgroundRepeat = 'no-repeat';
  showDots = true;
  dotColor = '#FFF';
  showCaptions = true;
  captionColor = '#FFF';
  captionBackground = 'rgba(0, 0, 0, .35)';
  lazyLoad = false;
  hideOnNoSlides = false;
  width = '100%';
  fullscreen = false;
  enableZoom = false;
  enablePan = false;
  noLoop = false;
  constructor(private storageService: StorageService,
              private activeRouter: ActivatedRoute,
              public modalController: ModalController,
              private catagoryService: CatagoryService) {
    // this.isLogin = this.storageService.getItem(this.storageService.IsLogin);
    this.isLogin = false;
  } 
  ngOnInit() {
    this.activeRouter.params.subscribe((params: Params) => {
      this.isLogin = this.storageService.getItem(this.storageService.IsLogin);
    });
  }

  async searchModel(){
    const modal = await this.modalController.create({
      component: SearchContentComponent
    });
    return await modal.present();
  }

 
}
