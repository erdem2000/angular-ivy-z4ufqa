import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class MyGuardGuard implements CanActivate {
  canActivate(
): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
