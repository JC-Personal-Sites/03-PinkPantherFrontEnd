import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getNavBars(): Observable<any> {
    return this.http.get(this.apiUrl + '/navBar');
  }

  getPictures(): Observable<any> {
    return this.http.get(this.apiUrl + '/pictures');
  }
}
