import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/interfaces/usuarios.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  lista_usuario: User[] = [];

  constructor( private apiService: ApiService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.apiService.user().subscribe((data) => {
      this.lista_usuario = data;
      
    });
  }

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

  Enviar() {
    const user: any = {
      nombre: this.User.nombre,
      apellidos: this.User.apellidos,
      tipo_documento: this.User.tipo_documento,
      documento: this.User.documento,
      phone: this.User.phone,
      email: this.User.email,
    };
    if(user !== undefined && user !== ''){
    this.apiService.add_user(user).subscribe((data:any) => {

      if(data.band){
        location.reload();
      }
    });
    
  }else{
    console.log("rellena esa joda")
  }

  }
  
  Update(i: number){
    

    if(this.band){
      this.band = false
    }else{
      this.band = true
    }
    this.id = i;
    console.log(i)

  }
  Update2(){
    
    const user: any = {
      id: this.id,
      nombre: this.User2.nombre,
      apellidos: this.User2.apellidos,
      tipo_documento: this.User2.tipo_documento,
      documento: this.User2.documento,
      phone: this.User2.phone,
      email: this.User2.email,
    };
    this.apiService.update_user( user ).subscribe((data:any) => {
      console.log(data)
      if(data.band){
        location.reload();
      }
  })
  
  console.log(user)
  
  }

  Delete(id: number){

    this.apiService.delete_user( id ).subscribe((data) => {
      console.log(data)
  })
  console.log(id)

  }

}
