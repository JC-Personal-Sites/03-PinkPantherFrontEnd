import { Component, OnInit } from '@angular/core';

import { HTTPAboutService } from './_httpLinks/https.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  returnText!: string
  constructor(private httpAboutService: HTTPAboutService) {}

  ngOnInit(): void {
    this.httpAboutService.getWikiPedia().subscribe((response) => {
      console.log(response.parse);
      this.returnText = response.parse
    })

    // fetch('https://en.wikipedia.org/w/api.php?action=parse&page=Pet_door&format=json&origin=*')
    // .then(res => console.log(res))
  }

}
