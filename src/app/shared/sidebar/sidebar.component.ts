import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Usuario } from 'src/app/interfaces/usuarios.interface';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ],
  styleUrls: [
    './sidebar.component.css'
  ]
  
})
export class SidebarComponent implements OnInit {

  usuario: Usuario[] = [];

  constructor( private apiService: ApiService, private router: Router ) { }

  ngOnInit(): void {
  }

  Cerrar() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  
}
