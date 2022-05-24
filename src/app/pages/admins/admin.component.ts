import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Usuario, API } from 'src/app/interfaces/usuarios.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
  
})
export class AdminComponent {

  constructor( private apiService: ApiService ) { }
  
  lista_usuarios: Usuario[] = [];

  llenar_tabla(){
    this.apiService.login(this.lista_usuarios).subscribe( 
      data => {

        this.lista_usuarios = data
    } )
  }

  

  // ngOnInit(): void {
  //   this.apiService.admins().subscribe( 
  //     data => {

  //       this.lista_usuarios = data.Usuarios
  //   } )
  // }
  
}
