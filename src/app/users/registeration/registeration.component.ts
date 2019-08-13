import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/password.validator';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit, AfterViewInit {

  registerationForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    confirmPassword: ['', Validators.required],
    position: ['']
  }, {validator: PasswordValidator});

  get email() {
    return this.registerationForm.get('email');
  }
  get password() {
    return this.registerationForm.get('password');
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword');
  }

 @ViewChild('emailRef', {static: false}) emailElementRef: ElementRef;

  constructor(private interactionService: InteractionService, private fb: FormBuilder) { }

  ngOnInit() {
    this.interactionService.sendHomeMessage('registrationComponent');
  }

  ngAfterViewInit(){
    this.emailElementRef.nativeElement.focus();
  }

  onSubmit(){
    console.log(this.registerationForm.get('email').value);
  }

}
