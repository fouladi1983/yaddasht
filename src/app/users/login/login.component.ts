import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { InteractionService } from '@/interaction.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '@/auth-service.service';
import { Router } from '@angular/router';
import { RegistrationService } from '@/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


 errorMessage = '';
 resError = false;
 errorMsg = '';
 responseError = false;

  constructor(
    private interactionService: InteractionService,
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private regSrv: RegistrationService,
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
      error =>{
        if(error){
          this.resError = true;
          this.errorMsg = error.error.message;
        }
      });
  }

  removeErrorMsg(){
    this.resError = false;
    this.errorMessage = '';
  }

  checkEmail(email) {
    this.authService.checkUser(email).subscribe(
      data => {
        if (data.message) {
          this.errorMessage = '';
        }
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  sendRecoveryEmail(email: string) {
    this.regSrv.recovery(email).subscribe(data => console.log(data));
  }

}
