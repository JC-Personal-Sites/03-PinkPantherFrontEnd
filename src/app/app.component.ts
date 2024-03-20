import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageComponent } from './page/page.component';
import { FooterComponent } from './page/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
