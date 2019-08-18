import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate} from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  constructor(private _authService: AuthServiceService, private _router: Router) {}

  canActivate(): boolean {
    if(this._authService.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
