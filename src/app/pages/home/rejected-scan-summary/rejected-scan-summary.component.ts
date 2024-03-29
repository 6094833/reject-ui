import { Component } from '@angular/core';
import { Summary, Breakdown } from '../../../constants/constants';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-rejected-scan-summary',
  templateUrl: './rejected-scan-summary.component.html',
  styleUrl: './rejected-scan-summary.component.scss'
})
export class RejectedScanSummaryComponent {
  tabs = ['Rejected Scan Result'];
  selectedIndex:number = 0;
  displayedColumns: string[] = ['row', 'scanDate','locationId','fedexId','orgCd','rejectReason','rejectCount','totalCount'];
  displayedBreakdownColumns: string[] = ['row', 'scanType','exceprionCd','rejectCount','status'];
  summaries: Summary[] = [];
  breakdowns: Breakdown[] = [];

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
    for(var i = 1; i<=4; i++) {
      this.breakdowns.push({
        row: i,
        scanType: "SIPS",
        exceprionCd: "",
        rejectCount: 1,
        status: "Unproccessed"
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

  onRowClicked(summary:Summary) {
    console.log("Clicked Row : ",summary);
    this.tabs.push(`${this.tabs.length - 1}005275418`);
    this.selectedIndex = this.tabs.length - 1;
  }

  handlePageEvent(e: PageEvent) {
    console.log("Page Changed Event : ",e);
  }
}
