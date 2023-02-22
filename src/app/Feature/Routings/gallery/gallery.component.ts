import { Component, OnInit } from '@angular/core';
import { faVideo, faImage } from '@fortawesome/free-solid-svg-icons';

import { GalleryServiceService } from './_Services/gallery-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  faVideo = faVideo;
  faImage = faImage;
  links = [
    { tabName: 'Gallery 1', path: 'gallery1' },
    { tabName: 'Gallery 2', path: 'gallery2' },
  ];
  imageStatus: boolean = true;
  videoStatus: boolean = false;

  constructor(private galleryServiceService: GalleryServiceService) {}

  ngOnInit(): void {
    this.galleryServiceService.sourceDataOption('Pictures');
  }

  iconEvent() {
    if (this.imageStatus === true) {
      this.imageStatus = false;
      this.videoStatus = true;
      this.galleryServiceService.sourceDataOption('Videos');
    } else {
      this.imageStatus = true;
      this.videoStatus = false;
      this.galleryServiceService.sourceDataOption('Pictures');
    }
  }
}
