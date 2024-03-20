import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIService } from '../../../_utils/services/api.service';

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.css',
})
export class PicturesComponent implements OnInit {
  rowData!: any;

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.apiService.getPictures().subscribe((res) => {
      this.rowData = res.data;
    });
  }

  filterResult(e: any) {
    return this.rowData.filter(
      (d: any) => d.title.toLowerCase() === e.target.value.toLowerCase()
    );
  }
}
