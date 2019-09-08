import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShareService {
  constructor(private http: HttpClient) {}

  uploadPhoto(userInfo): Observable<any> {
    const uploadUrl = "http://localhost:3000/userPhoto/upload";
    return this.http.post<any>(uploadUrl, userInfo);
  }

  getUserPhoto(userId): Observable<any> {
    const getPhotoUrl = `http://localhost:3000/userPhoto?userId=`;
    return this.http.get<any>(getPhotoUrl + userId);
  }
}
