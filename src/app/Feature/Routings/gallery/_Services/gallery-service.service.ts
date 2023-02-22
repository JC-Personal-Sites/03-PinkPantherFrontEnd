import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryServiceService {
  private dataMessage: Subject<any[]> = new Subject<any>();
  dataMessage$ = this.dataMessage.asObservable();

  private stateMessage: Subject<'Pictures' | 'Videos'> = new Subject<
    'Pictures' | 'Videos'
  >();
  stateMessage$ = this.stateMessage.asObservable();

  dataOption: 'Pictures' | 'Videos' = 'Pictures';

  constructor(private http: HttpClient) {}

  sourceDataOption(option: 'Pictures' | 'Videos') {
    // console.log(option);
    this.dataOption = option;
    if (this.dataOption === 'Pictures') {
      return this.http
        .get('http://localhost:4200/assets/DB_Gallery_Pictures.json')
        .subscribe((res: any) => {
          this.dataMessage.next(res);
          this.stateMessage.next(option);
        });
    } else {
      return this.http
        .get('http://localhost:4200/assets/DB_Gallery_Videos.json')
        .subscribe((res: any) => {
          this.dataMessage.next(res);
          this.stateMessage.next(option);
        });
    }
  }
}
