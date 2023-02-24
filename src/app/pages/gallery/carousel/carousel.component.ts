import { Component, OnInit } from '@angular/core';
import { GalleryServiceService } from '../_Services/gallery-service.service';

import { HTTPGalleryService } from '../_httpLinks/https.service'
// import { I_Picture, I_Video } from '../_Model/galleryModel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  title: string = `Bootstrap Carousel`;
  setState: 'Pictures' | 'Videos' = 'Pictures';
  // dataSet!: I_Picture[] | I_Video[];
  dataSet: any[] = [];

  constructor(private galleryServiceService: GalleryServiceService,private httpGalleryService: HTTPGalleryService) {}

  ngOnInit(): void {
    this.galleryServiceService.stateMessage$.subscribe((state) => {
      this.setState = state;
      console.log('Gallery2-state', state);

      if (this.setState === 'Pictures') {
        this.httpGalleryService.getPictures().subscribe((response) => {
          this.dataSet = response.data;
          console.log('Gallery2-data-Pictures', response.data);
        });
      } else {
        this.httpGalleryService.getVideos().subscribe((response) => {
          this.dataSet = response.data;
          console.log('Gallery2-data-Videos', response.data);
        });
      }
    });

    // this.galleryServiceService.dataMessage$.subscribe((data) => {
    //   this.dataSet = data;
    //   console.log('Gallery2-data', data);
    // });
  }
}
