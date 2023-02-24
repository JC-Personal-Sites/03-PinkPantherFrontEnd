import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HTTPGalleryService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPictures(): Observable<any> {
    return this.http.get(this.apiUrl + '/picture');
  }

  getVideos(): Observable<any> {
    return this.http.get(this.apiUrl + '/video');
  }
}
