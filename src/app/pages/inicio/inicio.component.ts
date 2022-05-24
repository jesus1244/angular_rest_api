import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { detalle, Usuario, User, canchas } from 'src/app/interfaces/usuarios.interface';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

 

  constructor( private apiService: ApiService, private router: Router, private formBuilder: FormBuilder ) {}

  
  lista_detalle: detalle[] = [];

  lista_admins: Usuario[] = [];

  lista_usuario: User[] = [];

  lista_canchas: canchas[] = [];

  band = true;

  id: number = 0;
  

  User:any = {
    nombre: '',
    apellidos: '',
    tipo_documento: '',
    documento: '',
    phone: '',
    email: '',
    admin: '',
    cancha: '',
    hora: '',
    fecha: '',
    id: '',
    ubicacion: ''
  };
  User2 = {
    nombre: '',
    apellidos: '',
    tipo_documento: '',
    documento: '',
    phone: '',
    email: '',
  };


  ngOnInit(): void {
    this.apiService.detalle_reserva().subscribe((data) => {
      this.lista_detalle = data;
    });

    this.apiService.user().subscribe((data) => {
      this.lista_usuario = data;
      
    });
    
    this.apiService.admins().subscribe((data) => {
      this.lista_admins = data;
      
    });

    this.apiService.canchas().subscribe((data) => {
      this.lista_canchas = data;
      console.log(this.lista_usuario)
    });

   console.log(this.User.admin)
  }

  
  enviar_detalle(){

    const user: any = {
      id_usuario: this.User.nombre,
      id_admin: this.User.admin,
      id_canchas: this.User.cancha,
      fecha: this.User.fecha,
      hora: this.User.hora,
      cancha: this.User.cancha,
      ubicacion: this.User.ubicacion,
    };
    
    this.apiService.add_reserva( user ).subscribe( data => {
      console.log(data);
    });
    console.log(user);
    location.reload();
  }

  eliminar_detalle(id: number){
    this.apiService.delete_reserva( id ).subscribe( data => {
      location.reload();
    } )
    
  };
  update_detalle1(id: number){
    if(this.band){
      this.band = false
    }else{
      this.band = true
    }
    this.id = id;
    
  }
  update_detalle(){

    const user: any = {
      id_reserva: this.id,
      id_usuario: this.User.nombre,
      id_admin: this.User.admin,
      id_canchas: this.User.cancha,
      fecha: this.User.fecha,
      hora: this.User.hora,
      cancha: this.User.cancha,
      ubicacion: this.User.ubicacion,
    };
    this.apiService.update_reserva( user ).subscribe( (data:any) => {
      if(data.band){
        location.reload();
      }
    } )
    
    if(this.band){
      this.band = false
      
    }else{
      this.band = true
    }
    
  }
}
