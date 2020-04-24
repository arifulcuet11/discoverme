import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NgMatModule } from '../share/ngMat/ngMat.module';
import { SlideshowModule } from 'ng-simple-slideshow';
import { SearchContentComponent } from './search-content/search-content/search-content.component';
import { HomeCatagoryComponent } from './home-catagory/home-catagory.component';
import { TopStoryComponent } from './top-story/top-story.component';
import { RecentlyAddComponent } from './recently-add/recently-add.component';
import { SlidingImageComponent } from './sliding-image/sliding-image.component';
import { CatagoryModule } from '../catagory/catagory.module';
import { CatagoryComponent } from '../catagory/catagory.component';
import { YourComponent } from './your/your.component';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { DailogFilterOptionComponent } from './search-content/dailog-filter-option/dailog-filter-option.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlideshowModule,
    CatagoryModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    NgMatModule,
  ],
  declarations: [
    HomePage,
    SearchContentComponent,
    HomeCatagoryComponent,
    TopStoryComponent,
    RecentlyAddComponent,
    SlidingImageComponent,
    YourComponent,
    DailogFilterOptionComponent,
  ],
  entryComponents: [
    SearchContentComponent,
    HomeCatagoryComponent,
    TopStoryComponent,
    RecentlyAddComponent,
    SlidingImageComponent,
    YourComponent,
    DailogFilterOptionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerGestureConfig
   }],
})
export class HomePageModule {}
