import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Usuario } from 'src/app/interfaces/usuarios.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';

  usuario: Usuario[] = [];
  constructor( private apiService: ApiService ) {
     
    
  }
}
