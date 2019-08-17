import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _http: HttpClient) { }

  login(userInfo){
    const url = 'http://192.168.100.197:3000/login';
    return this._http.post<any>(url, userInfo);
  }

  checkUser(email){
    const url = 'http://192.168.100.197:3000/checkUser?email=' + email;
    return this._http.get<any>(url);
  }
}
