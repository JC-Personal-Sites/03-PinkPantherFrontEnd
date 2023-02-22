import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Feature/Routings/about/about.component';
import { GalleryComponent } from './Feature/Routings/gallery/gallery.component';
import { HistoryComponent } from './Feature/Routings/history/history.component';
import { HomeComponent } from './Feature/Routings/home/home.component';
import { PageNotFoundComponent } from './Feature/_page-not-found/page-not-found.component';
import { AppendixComponent } from './Feature/Routings/appendix/appendix.component';
import { Gallery1Component } from './Feature/Routings/gallery/gallery1/gallery1.component';
import { Gallery2Component } from './Feature/Routings/gallery/gallery2/gallery2.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'appendix', component: AppendixComponent },
  {
    path: 'gallery',
    component: GalleryComponent,
    children: [
      { path: 'gallery1', component: Gallery1Component },
      { path: 'gallery2', component: Gallery2Component },
    ],
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
