import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

 @ViewChild('emailRef', {static: false}) emailElementRef: ElementRef;

 errorMessage = '';

  constructor(
    private interactionService: InteractionService,
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private _router: Router
    ) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

get email(){
  return this.loginForm.get('email');
}
get password(){
  return this.loginForm.get('password');
}

  ngOnInit() {
    this.interactionService.sendHomeMessage('loginComponent');
  }

  ngAfterViewInit(){
    this.emailElementRef.nativeElement.focus();
  }

  onSubmit() {
    const userInfo = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };

    this.authService.login(userInfo).subscribe(
      data => {
      localStorage.setItem('token', data['token']);
      localStorage.setItem('userId', data['userId']);
      this._router.navigateByUrl('/');
      },
      error => console.log(error));
  }

}
