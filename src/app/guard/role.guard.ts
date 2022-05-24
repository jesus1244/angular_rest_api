import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor( private router: Router, private apiService: ApiService ) {}

  canActivate( route: ActivatedRouteSnapshot ):boolean{
    
    const expectedRole = route.data['expectedRole'];
    const token:any = localStorage.getItem('token');
    

    
    const tokenInfo = this.getDecodedAccessToken(token);
    
      tokenInfo.forEach((data:any) => {
       console.log( data )
      });

    
    
    return true;
  
  }
  getDecodedAccessToken(token: string): any {
    try {
      return decode(token);
    } catch(Error) {
      return null;
    }
  }
}
