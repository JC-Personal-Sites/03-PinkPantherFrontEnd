import { Component, OnInit } from '@angular/core';

import Tabulator from 'tabulator-tables';

// import AppendixData from '../../../../assets/db-appendix.json';
import { AllHTTPsService } from '../../__Services/all-https.service';
import { I_Appendix, Columns } from './model/appendix';

@Component({
  selector: 'app-appendix',
  templateUrl: './appendix.component.html',
  styleUrls: ['./appendix.component.css'],
})
export class AppendixComponent implements OnInit {
  title: string = `Appendix - Created with Tabulator`;
  tab: HTMLElement = document.createElement('div');
  innerGrid!: Tabulator;
  // appendixData: I_Appendix[] = AppendixData;

  constructor(private allHTTPsService: AllHTTPsService) {}

  ngOnInit(): void {
    this.drawTable();
  }

  drawTable(): void {
    this.allHTTPsService.getAppendixs().subscribe((response) => {
      let parentDiv = document.getElementById('inner-table');
      let tabConfig: Tabulator.Options = {
        data: response.data,
        height: '100%',
        layout: 'fitColumns',
        columns: Columns,
        resizableRows: true,
        movableColumns: true,
        clipboard: true,
        clipboardPasteAction: 'replace',
      };
      this.innerGrid = new Tabulator(this.tab, tabConfig);
      this.tab.classList.add('table-light');
      parentDiv!.appendChild(this.tab);
      this.innerGrid.redraw(true);
    });
  }
}
