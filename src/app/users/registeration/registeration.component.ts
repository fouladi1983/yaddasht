import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit, AfterViewInit {

 @ViewChild('emailRef', {static: false}) emailElementRef: ElementRef;

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.sendHomeMessage('registrationComponent');
  }

  ngAfterViewInit(){
    this.emailElementRef.nativeElement.focus();
  }

}
