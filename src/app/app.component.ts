import { Component, OnInit } from '@angular/core';
import { InteractionService } from './interaction.service';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'yaddasht';
  displaySidebar = true;
  userEmail = '';

  constructor(private interactionService: InteractionService, public authService: AuthServiceService) {}

  ngOnInit() {
    this.interactionService.homeMessage$.subscribe(message => {
      if (
        message === 'homeComponent'
        || message === 'loginComponent'
        || message === 'registrationComponent'
        || message === 'userActivation') {
        this.displaySidebar = false;
      } else {
        this.displaySidebar = true;
      }
    });
  }

  showSidebar() {
    this.displaySidebar = true;
  }
}
