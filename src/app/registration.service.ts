import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  regUrl = environment.devServerUrl + '/register';

  register(userInfo): Observable<any> {
    return this._http.post<any>(this.regUrl, userInfo);
  }

  recovery(email: string) {
    return of(`your email is ${email}`);
  }
}
