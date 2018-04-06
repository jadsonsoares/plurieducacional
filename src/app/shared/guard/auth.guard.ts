import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _router: Router) {}

    canActivate() {
      if (localStorage.getItem('isLoggedin')) {
        return true;
      }

      this._router.navigate(['/login']);
      return false;
    }
}
