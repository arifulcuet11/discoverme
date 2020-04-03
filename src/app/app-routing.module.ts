import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'catagory', loadChildren: () => import('./catagory/catagory.module').then( m => m.CatagoryModule)},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)},
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
