import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API, canchas, detalle, User, Usuario } from './interfaces/usuarios.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private apiUrl: string = 'http://localhost:3000';

  private apiUrl: string = 'https://nodejs-parcial.herokuapp.com';

  constructor( private http: HttpClient, private jwtHelper: JwtHelperService ) { }

  login(user: Usuario[]): Observable<Usuario[]>{

    const url = `${ this.apiUrl }/login`;

    return this.http.post<Usuario[]>( url, user );
  }
  
  detalle_reserva(): Observable<detalle[]>{

    const url = `${ this.apiUrl }/detalle_reserva`;

    return this.http.get<detalle[]>( url );
  }

  add_user( user: User[] ): Observable<User[]>{

    const url = `${ this.apiUrl }/add`;

    return this.http.post<User[]>( url, user );
  }

  user(): Observable<User[]>{

    const url = `${ this.apiUrl }/users`;

    return this.http.get<User[]>( url );
  }
  
  update_user( user: User[] ): Observable<User[]>{

    const url = `${ this.apiUrl }/update`;

    return this.http.post<User[]>( url, user );
  }

  delete_user(id: number): Observable<{}>{

    const url = `${ this.apiUrl }/delete/`;

    return this.http.delete<{}>( url + id);
  }

  admins(): Observable<Usuario[]>{

    const url = `${ this.apiUrl }/admins`;

    return this.http.get<Usuario[]>( url );
  }

  canchas(): Observable<canchas[]>{

    const url = `${ this.apiUrl }/canchas`;

    return this.http.get<canchas[]>( url );
  }

  add_reserva( reserva: detalle[] ): Observable<detalle[]>{

    const url = `${ this.apiUrl }/add_reserva`;

    return this.http.post<detalle[]>( url, reserva );
  }

  delete_reserva( id: number ): Observable<{}>{

    const url = `${ this.apiUrl }/delete_reserva/`;

    return this.http.delete<{}>( url + id );
  }

  update_reserva( reserva: detalle[] ): Observable<detalle[]>{

    const url = `${ this.apiUrl }/update_reserva`;

    return this.http.post<detalle[]>( url, reserva );
  }

  isToken():boolean {
    const token = localStorage.getItem('token');
    if(token !== null && this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
  
}
