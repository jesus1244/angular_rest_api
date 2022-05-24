import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({ providedIn: 'root' })
export class PagesGuard implements CanActivate{

    constructor( private router: Router, private apiService: ApiService ) {}

    canActivate():boolean{
        
        if(!this.apiService.isToken()){
            console.log("Token no es valido o expiró");
            this.router.navigate(['login']);
            return false;
        }
        
        return true;
    }
}