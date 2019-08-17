import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  regUrl = 'http://192.168.100.197:3000/register';

  register(userInfo): Observable<any> {
    return this._http.post<any>(this.regUrl, userInfo);
  }
}
