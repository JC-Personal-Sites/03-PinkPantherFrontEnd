import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { APIService } from '../_utils/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent implements OnInit {
  rowData!: any;

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.apiService.getNavBars().subscribe((response) => {
      this.rowData = response.data;
      console.log(response.data);
    });
  }
}
