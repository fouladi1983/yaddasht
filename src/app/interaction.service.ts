import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private homeMessageSource = new Subject<string>();
  homeMessage$ = this.homeMessageSource.asObservable();

  constructor() { }

  sendHomeMessage(message: string){
    this.homeMessageSource.next(message);
  }
}
