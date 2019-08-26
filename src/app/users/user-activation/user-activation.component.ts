import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InteractionService } from 'src/app/interaction.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-activation',
  templateUrl: './user-activation.component.html',
  styleUrls: ['./user-activation.component.scss']
})
export class UserActivationComponent implements OnInit {
  httpMessage = '';
  errorMessage = '';

  constructor(
    private _route: ActivatedRoute,
    private interactionService: InteractionService,
    private _http: HttpClient
    ) { }

  ngOnInit() {
    this.interactionService.sendHomeMessage('userActivation');

    const queryParameter = this._route.snapshot.queryParamMap.get('uuid');
    this._http.get('http://localhost:3000/useractivation?uuid=' + queryParameter).subscribe(
      httpMsg => {
        // tslint:disable-next-line: no-string-literal
        this.httpMessage = httpMsg['message'];
        },
      errMessage => {
        this.errorMessage = errMessage.error.message;
      }
      );
  }

}
