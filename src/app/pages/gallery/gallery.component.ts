import { Component, OnInit } from '@angular/core';
import { faVideo, faImage } from '@fortawesome/free-solid-svg-icons';

import { GalleryServiceService } from './_Services/gallery-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  faVideo = faVideo;
  faImage = faImage;
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
