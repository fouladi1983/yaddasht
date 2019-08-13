import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.sendHomeMessage('homeComponent');
  }

}
