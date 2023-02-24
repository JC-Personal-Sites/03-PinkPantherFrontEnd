import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UtilsModule } from 'src/app/_utils/utils.module';

import { PageNotFoundComponent } from './_globals/_page-not-found/page-not-found.component';
import { PagesComponent } from './pages.component';
import { UsersComponent } from './_users/users.component';
import { AboutComponent } from './about/about.component';
import { AppendixComponent } from './appendix/appendix.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HistoryComponent } from './history/history.component';
import { CarouselComponent } from './gallery/carousel/carousel.component';
import { SignUpComponent } from './_users/sign-up/sign-up.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    PagesComponent,
    UsersComponent,
    AboutComponent,
    AppendixComponent,
    GalleryComponent,
    HistoryComponent,
    CarouselComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    UtilsModule
    
  ]
})
export class PagesModule { }
