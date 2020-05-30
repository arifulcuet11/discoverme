import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'catagory', loadChildren: () => import('./catagory/catagory.module').then( m => m.CatagoryModule)},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)},
  { path: 'content-type', loadChildren: () => import('./content-type/content-type.module').then( m => m.ContentTypeModule)},
  { path: 'book-mark', loadChildren: () => import('./book-mark/book-mark.module').then( m => m.BookMarkModule)},
  { path: 'explore', loadChildren: () => import('./explore/explore.module').then( m => m.ExploreModule)},
  { path: 'notification', loadChildren: () => import('./notification/notification.module').then( m => m.NotificationModule)},
  // { path: 'content-view', loadChildren: () => import('./content-view/content-view.module').then( m => m.ContentViewModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
