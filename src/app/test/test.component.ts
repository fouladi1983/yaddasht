import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AuthServiceService } from '@/auth-service.service';
declare const $: any;
import * as moment from 'jalali-moment';

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {

  constructor(private authService: AuthServiceService) {
  }
  text = 'Here is some text to test splice pipe...';

  ngOnInit() {
    $(document).ready(() => {
      $("input").datepicker();
      $("#datepicker1btn").click(function(event) {
        event.preventDefault();
        $("#datepicker1").focus();
    })
    });

    let todayJalali = moment().locale('fa').format('YYYY/M/D')
    let m = moment.from('18/10/1398', 'fa', 'DD/MM/YYYY');
    let date = new Date(m.toString());
    console.log('DATE: ' + date);
  }
}
