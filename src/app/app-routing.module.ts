import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { AboutComponent } from './pages/about/about.component';
import { HistoryComponent } from './pages/history/history.component';
import { AppendixComponent } from './pages/appendix/appendix.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PageNotFoundComponent } from './pages/_globals/_page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: PagesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'appendix', component: AppendixComponent },
  { path: 'gallery', component: GalleryComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
