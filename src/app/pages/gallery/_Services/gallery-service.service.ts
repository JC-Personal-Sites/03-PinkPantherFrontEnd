import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { HTTPGalleryService } from '../_httpLinks/https.service'

@Injectable({
  providedIn: 'root',
})
export class GalleryServiceService {
  private dataMessage: Subject<any[]> = new Subject<any>();
  dataMessage$ = this.dataMessage.asObservable();

  private stateMessage: Subject<'Pictures' | 'Videos'> = new Subject<'Pictures' | 'Videos'>();
  stateMessage$ = this.stateMessage.asObservable();

  dataOption: 'Pictures' | 'Videos' = 'Pictures';

  constructor(private httpGalleryService: HTTPGalleryService) {}

  sourceDataOption(option: 'Pictures' | 'Videos') {
    // console.log(option);
    this.dataOption = option;
    if (this.dataOption === 'Pictures') {
      this.httpGalleryService.getPictures().subscribe((response) => {
        console.log(response.data);
        // this.dataMessage.next(res);
        // this.stateMessage.next(option);
      })
    } else {
      this.httpGalleryService.getVideos().subscribe((response) => {
        console.log(response.data);
        // this.dataMessage.next(res);
        // this.stateMessage.next(option);
      })
    }
  }
}
