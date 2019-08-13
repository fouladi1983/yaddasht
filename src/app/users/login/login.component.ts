import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

 @ViewChild('emailRef', {static: false}) emailElementRef: ElementRef;

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.sendHomeMessage('loginComponent');
  }

  ngAfterViewInit(){
    this.emailElementRef.nativeElement.focus();
  }

}
