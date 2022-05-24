import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { API, Usuario } from 'src/app/interfaces/usuarios.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}
  lista_usuarios: Usuario[] = [];

  Usuario = {
    usuario: '',
    password: '',
  };

  iniciar() {
    
    const user:any = { usuario: this.Usuario.usuario, password: this.Usuario.password };
    this.apiService.login( user ).subscribe( (data:any) => {
        localStorage.setItem('token', data.token);
        console.log(user);
        this.router.navigate(['inicio']);
    });
  }
  
}
