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
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlideshowModule,
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
  ],
  entryComponents: [
    SearchContentComponent,
    HomeCatagoryComponent,
    TopStoryComponent,
    RecentlyAddComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
