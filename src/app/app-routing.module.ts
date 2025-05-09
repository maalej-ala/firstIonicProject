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
<<<<<<< HEAD

  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
=======
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
>>>>>>> ff0545529bb7c35877499335c2d1de1aa7d8a5ca
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
<<<<<<< HEAD
 
=======
  {
    path: 'client-personel/:id',
    loadChildren: () => import('./docteur/client-personel/client-personel.module').then( m => m.ClientPersonelPageModule)
  },


>>>>>>> ff0545529bb7c35877499335c2d1de1aa7d8a5ca


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
