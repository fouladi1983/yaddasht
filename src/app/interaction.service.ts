import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private homeMessageSource = new Subject<string>();
  homeMessage$ = this.homeMessageSource.asObservable();

  private loginMsgSource = new Subject<string>();
  loginMessage$ = this.loginMsgSource.asObservable();

  constructor() { }

  sendHomeMessage(message: string){
    this.homeMessageSource.next(message);
  }

  sendLoginMessage(loginMsg: string) {
    this.loginMsgSource.next(loginMsg);
  }
}
