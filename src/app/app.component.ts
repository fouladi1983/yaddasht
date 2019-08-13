import { Component, OnInit } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'yaddasht';
  message = '';
  displaySidebar = true;

  constructor(private interactionService: InteractionService) {}

  ngOnInit() {
    this.interactionService.homeMessage$.subscribe(message => {
      if (message === 'homeComponent' || message === 'loginComponent' || message === 'registrationComponent') {
        this.message = message;
        this.displaySidebar = false;
      } else {
        this.displaySidebar = true;
      }
    });
  }
}
