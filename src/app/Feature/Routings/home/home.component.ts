import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faYoutube,
  faWikipediaW,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  a: number = 0;
  status: boolean = false;
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faWikipediaW = faWikipediaW;
  faTwitter = faTwitter;
  faVolumeUp = faVolumeUp;

  constructor() {}

  ngOnInit(): void {}

  playSoundTrack() {
    if (this.a == 0) {
      document.getElementsByTagName('audio')[0].play();
      this.a++;
      this.status = true;
    } else {
      document.getElementsByTagName('audio')[0].pause();
      this.a--;
      this.status = false;
    }
  }
}
