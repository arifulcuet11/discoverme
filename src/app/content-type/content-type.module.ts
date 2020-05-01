import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentViewItemsComponent } from './content-view-items/content-view-items.component';
import { ContentTypeComponent } from './content-type.component';
import { SubCatagoryComponent } from './sub-catagory/sub-catagory.component';
import { ContentItemsComponent } from './content-items/content-items.component';
import { DailogFilterContentTypeComponent } from './dailog-filter-content-type/dailog-filter-content-type.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgMatModule } from '../share/ngMat/ngMat.module';
import { ContentTypeRoutingModule } from './content-type-routing.module';
import { UserCommentComponent } from './user-comment/user-comment.component';
import { UserNotSignInComponent } from './user-not-sign-in/user-not-sign-in.component';

@NgModule({
  declarations: [
    ContentTypeComponent,
     SubCatagoryComponent,
     ContentItemsComponent,
     DailogFilterContentTypeComponent,
     ContentViewItemsComponent,
     UserCommentComponent,
     UserNotSignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    NgMatModule,
    ContentTypeRoutingModule
  ],
  entryComponents: [
    SubCatagoryComponent,
    DailogFilterContentTypeComponent,
    UserCommentComponent,
    UserNotSignInComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentTypeModule {}
