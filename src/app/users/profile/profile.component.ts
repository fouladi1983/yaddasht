import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.sendHomeMessage('profileComponent');
  }

}
