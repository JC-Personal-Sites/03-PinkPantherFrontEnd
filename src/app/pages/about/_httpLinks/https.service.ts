import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HTTPAboutService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getWikiPedia(): Observable<any> {
    // return this.http.get('https://en.wikipedia.org/w/api.php?action=parse&page=The_Pink_Panther&format=json&origin=*')
    return this.http.get('https://en.wikipedia.org/api/rest_v1/page/summary/The_Pink_Panther')
    // https://en.wikipedia.org/wiki/The_Pink_Panther');
  }
}
