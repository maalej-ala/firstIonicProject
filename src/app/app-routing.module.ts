import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./user/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'settings',
    loadChildren: () => import('./user/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./docteur/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./docteur/calendrier/calendrier.module').then( m => m.CalendrierPageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./docteur/personal/personal.module').then( m => m.PersonalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'client-personel/:id',
    loadChildren: () => import('./docteur/client-personel/client-personel.module').then( m => m.ClientPersonelPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
