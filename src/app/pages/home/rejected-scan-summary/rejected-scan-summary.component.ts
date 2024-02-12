import { Component } from '@angular/core';
import { Summary } from '../../../constants/constants';

@Component({
  selector: 'app-rejected-scan-summary',
  templateUrl: './rejected-scan-summary.component.html',
  styleUrl: './rejected-scan-summary.component.scss'
})
export class RejectedScanSummaryComponent {
  tabs = ['Rejected Scan Result', '0005275418'];
  selectedIndex:number = 0;
  displayedColumns: string[] = ['row', 'scanDate','locationId','fedexId','orgCd','rejectReason','rejectCount','totalCount'];
  displayedActionColumns: string[] = this.displayedColumns.map(col => col + '-action');
  summaries: Summary[] = [];

  public constructor() {
    for(var i = 1; i<=10; i++) {
      this.summaries.push({
        row: i,
        scanDate: "24/2/23",
        locationId: "M123MN34",
        fedexId: "R@37HJd3",
        orgCd: "",
        rejectReason: "Some reason for " + i,
        rejectCount: 10,
        totalCount: 26
      });
    }
  }
    

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');
    if (selectAfterAdding) {
      this.selectedIndex = this.tabs.length - 1;
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.selectedIndex = index;
  }
}
