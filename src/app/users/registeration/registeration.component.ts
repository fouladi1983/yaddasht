import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { InteractionService } from '@/interaction.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '@/shared/password.validator';
import { RegistrationService } from '@/registration.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit, AfterViewInit {

  successMessage = '';
  errorMessage = '';

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

  constructor(
    private interactionService: InteractionService,
    private fb: FormBuilder,
    private registerationService: RegistrationService
    ) { }

  ngOnInit() {
    this.interactionService.sendHomeMessage('registrationComponent');
  }

  ngAfterViewInit(){
    this.emailElementRef.nativeElement.focus();
  }

  onSubmit() {
    const userInfo = {
      email: this.registerationForm.get('email').value,
      password: this.registerationForm.get('password').value,
      position: this.registerationForm.get('position').value
    };

    this.registerationService.register(userInfo)
    .subscribe(
      httpResponse => {
        this.successMessage = httpResponse.message;
        console.log(httpResponse.message);
      },
      httpErrorResponse => {
        this.errorMessage = httpErrorResponse.error.message;
      }
      );
  }
}
