import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-campaigns',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  // dummy sample data
  drafts = 7;
  totalItems = 100;
  activeItems = 43;
  inactiveItems = 50;
  appName = 'Campaigns';

  configs: { id: string; name: string; status: string; startDate: string; endDate: string }[];

  itemsPerPage = 8;
  page = 1;

  ngOnInit() {
    // this.configService.queryByAppId(undefined, 2).subscribe(data => {
    //   this.configs = data;
    //   console.log(this.configs);
    // });

    this.configs = [
      { id: 'ABCD01', name: 'Campaign Samples 001', status: 'Active', startDate: '06-12-2019', endDate: '06-12-2020' },
      { id: 'ABCD02', name: 'Campaign Christmas 2019', status: 'Schedule', startDate: '01-12-2019', endDate: '24-12-2019' },
      { id: 'ABCD03', name: 'Campaign Father Day 2020', status: 'Inactive', startDate: '05-04-2020', endDate: '06-12-2020' },
      { id: 'ABCD04', name: 'New Year 2020', status: 'Draft', startDate: '01-01-2020', endDate: '06-01-2020' }
    ];
  }
}
