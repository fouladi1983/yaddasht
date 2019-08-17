import { Component, OnInit } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'yaddasht';
  displaySidebar = true;
  loggedIn = false;
  userEmail = '';

  constructor(private interactionService: InteractionService) {}

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

    // check if user loggedIn
    if (localStorage.getItem('token') !== null) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    this.interactionService.loginMessage$.subscribe(message => {
        localStorage.setItem('userEmail', message);
    });

    if (localStorage.getItem('userEmail') !== null){
      this.userEmail = localStorage.getItem('userEmail');
    } else {
      this.userEmail = '';
    }
  }
}
