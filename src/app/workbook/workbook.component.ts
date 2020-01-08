import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-workbook',
  templateUrl: './workbook.component.html',
  styleUrls: ['./workbook.component.scss']
})
export class WorkbookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      $('.pDatepicker').datepicker();
    })
  }

  filter(fromDate, toDate){
    console.log(fromDate, toDate);
  }

}
