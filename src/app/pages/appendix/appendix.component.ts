import { Component, OnInit } from '@angular/core';

import { HTTPAppendixService } from './_httpLinks/https.service';

import { I_Appendix } from './_model/appendix.model';

@Component({
  selector: 'app-appendix',
  templateUrl: './appendix.component.html',
  styleUrls: ['./appendix.component.scss']
})
export class AppendixComponent implements OnInit {
  title: string = `Appendix - Created with Tabulator`;
  tab: HTMLElement = document.createElement('div');
  rowData!: I_Appendix[]
  displayedColumns: string[] = ['id', 'reference', 'topic', 'comments'];

  constructor(private httpAppendixService: HTTPAppendixService) {}

  ngOnInit(): void {
    this.httpAppendixService.getAppendixs().subscribe((response) => {
      this.rowData = response.data
    })
  }
}
