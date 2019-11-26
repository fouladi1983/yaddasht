import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AuthServiceService } from '@/auth-service.service';
declare const $: any;

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  @ViewChild('pdp', {static: false}) persianDatePicker: ElementRef;

  constructor(private authService: AuthServiceService) {
  }

  ngOnInit() {
    $("#elementId").persianDatepicker();
    console.log('AUTHE SERVICE: ' + this.authService.loggedIn());
  }

  logDate() {
    setTimeout(() => {
      console.log(this.persianDatePicker.nativeElement.value);
    }, 100);

  }
}
