import { Component, OnInit } from '@angular/core';
import { GalleryServiceService } from '../_Services/gallery-service.service';

// import GallaryPicture from '../../../../../assets/DB_Gallery_Pictures.json';
// import GallaryVideo from '../../../../../assets/DB_Gallery_Videos.json';
import { AllHTTPsService } from '../../../__Services/all-https.service';

import { I_Picture } from '../_Model/galleryModel';
import { I_Video } from '../_Model/galleryModel';

@Component({
  selector: 'app-gallery1',
  templateUrl: './gallery1.component.html',
  styleUrls: ['./gallery1.component.css'],
})
export class Gallery1Component implements OnInit {
  title: string = `angular-responsive-carousel`;
  setState: 'Pictures' | 'Videos' = 'Pictures';
  dataSet: any[] = [];
  valueH = 550;
  wd = 1000;
  // cells = 5;
  ts = 1;
  cw = 200;
  dot = false;
  objf = 'cover';
  cot = true;
  br = 10;
  ap = true;

  constructor(
    private galleryServiceService: GalleryServiceService,
    private allHTTPsService: AllHTTPsService
  ) {
    // this.galleryServiceService.dataMessage$.subscribe(
    //   (serviceData: I_Picture[] | I_Video[]) => {
    //     // console.log(serviceData);
    //     this.createURLList(serviceData);
    //   }
    // );
    // this.createURLList(GallaryPicture);
    this.galleryServiceService.stateMessage$.subscribe((state) => {
      this.setState = state;
      console.log('Gallery2-state', state);

      if (this.setState === 'Pictures') {
        this.allHTTPsService.getPictures().subscribe((response) => {
          response.data.forEach((d: I_Picture | I_Video) => {
            this.dataSet.push({ path: d.url });
          });
          console.log('Gallery2-data-Pictures', this.dataSet);
        });
      } else {
        this.allHTTPsService.getVideos().subscribe((response) => {
          response.data.forEach((d: I_Picture | I_Video) => {
            this.dataSet.push({ path: d.url });
          });
          console.log('Gallery2-data-Videos', this.dataSet);
        });
      }
    });
  }

  ngOnInit(): void {}

  // createURLList(d: I_Picture[] | I_Video[]) {
  //   d.forEach((d: I_Picture | I_Video) => {
  //     this.dataSet.push({ path: d.url });
  //   });
  // }
}
