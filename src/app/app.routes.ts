import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { AppendixComponent } from './pages/appendix/appendix.component';
import { PicturesComponent } from './pages/gallery/pictures/pictures.component';
import { VideosComponent } from './pages/gallery/videos/videos.component';
import { HistoryComponent } from './pages/history/history.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  { path: 'home', component: PagesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'gallery/picture', component: PicturesComponent },
  { path: 'gallery/video', component: VideosComponent },
  { path: 'appendix', component: AppendixComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
