import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {

  loadAAPI: Promise<any>;
  constructor() {
    this.loadAAPI = new Promise(resolve => {
      this.loadScript();
      resolve(true);
    });
  }

  public loadScript() {
    let isFound = false;
    const scripts = document.getElementsByTagName("script");
    for (let i = 0; i < scripts.length; ++i) {
      if (
        scripts[i].getAttribute('src') != null &&
        scripts[i].getAttribute('src').includes('loader')
      ) {
        isFound = true;
      }
    }

    if (!isFound) {
      const dynamicScripts = [
        'assets/js/bootstrap-datepicker.min.js',
        'assets/js/bootstrap-datepicker.fa.min.js'
      ];

      for (let i = 0; i < dynamicScripts.length; i++) {
        const node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = "text/javascript";
        node.async = false;
        node.charset = 'utf-8';
        document.getElementById('scriptsDiv')[0].appendChild(node);
      }
    }
  }

  ngOnInit() {}
}
