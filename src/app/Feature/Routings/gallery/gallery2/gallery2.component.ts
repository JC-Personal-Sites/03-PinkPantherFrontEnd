import { Component, OnInit } from '@angular/core';
import { GalleryServiceService } from '../_Services/gallery-service.service';

import { AllHTTPsService } from '../../../__Services/all-https.service';
import { I_Picture, I_Video } from '../_Model/galleryModel';

@Component({
  selector: 'app-gallery2',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.css'],
})
export class Gallery2Component implements OnInit {
  title: string = `Bootstrap Carousel`;
  setState: 'Pictures' | 'Videos' = 'Pictures';
  // dataSet!: I_Picture[] | I_Video[];
  dataSet: any[] = [];

  constructor(
    private galleryServiceService: GalleryServiceService,
    private allHTTPsService: AllHTTPsService
  ) {
    this.galleryServiceService.stateMessage$.subscribe((state) => {
      this.setState = state;
      console.log('Gallery2-state', state);

      if (this.setState === 'Pictures') {
        this.allHTTPsService.getPictures().subscribe((response) => {
          this.dataSet = response.data;
          console.log('Gallery2-data-Pictures', response.data);
        });
      } else {
        this.allHTTPsService.getVideos().subscribe((response) => {
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

  ngOnInit(): void {}
}
