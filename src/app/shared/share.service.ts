import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private http: HttpClient) { }

  uploadUrl = 'http://172.16.45.12:3000/userPhoto/upload';
  uploadPhoto(userInfo): Observable<any> {
    return this.http.post<any>(this.uploadUrl, userInfo);
  }
}
