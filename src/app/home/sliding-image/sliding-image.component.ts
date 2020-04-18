import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';
import { SlidingImageService } from 'src/app/share/services/sliding-image/sliding-image.service';

@Component({
  selector: 'app-sliding-image',
  templateUrl: './sliding-image.component.html',
  styleUrls: ['./sliding-image.component.scss'],
})
export class SlidingImageComponent implements OnInit {

  imageUrls: (string | IImage)[] = [
    // tslint:disable-next-line: max-line-length
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg', caption: 'The first slide', href: '/login' },
    // tslint:disable-next-line: max-line-length
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg', clickAction: () => alert('custom click function') },
    // tslint:disable-next-line: max-line-length
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg', caption: 'Apple TV', href: 'https://www.apple.com/' },
    'https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg'
  ];
  height = '150px';
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
  constructor(private slidingService: SlidingImageService) { }

  ngOnInit() {
    this.getAllImages();
  }

  getAllImages(){
    this.slidingService.gets().subscribe(res => {
      this.imageUrls = res;
    });
  }

}
