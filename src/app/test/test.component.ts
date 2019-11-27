import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AuthServiceService } from '@/auth-service.service';
declare const $: any;

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
  }
}
