import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HTTPAppendixService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAppendixs(): Observable<any> {
    return this.http.get(this.apiUrl + '/appendix');
  }
}
