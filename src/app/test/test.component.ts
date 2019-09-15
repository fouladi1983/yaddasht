import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
declare const $: any;

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  @ViewChild('pdp', {static: false}) persianDatePicker: ElementRef;

  constructor() {
  }

  ngOnInit() {
    $("#elementId").persianDatepicker();
  }

  logDate() {
    setTimeout(() => {
      console.log(this.persianDatePicker.nativeElement.value);
    }, 100);

  }
}
