import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private homeMessageSource = new BehaviorSubject<string>(null);
  homeMessage$ = this.homeMessageSource.asObservable();

  constructor() { }

  sendHomeMessage(message: string){
    this.homeMessageSource.next(message);
  }
}
