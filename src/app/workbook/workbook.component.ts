import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workbook',
  templateUrl: './workbook.component.html',
  styleUrls: ['./workbook.component.scss']
})
export class WorkbookComponent implements OnInit {

  fromDateObject = '';
  toDateObject = '';

  constructor() { }

  ngOnInit() {
    console.log(this.toDateObject.toString());
  }

}
