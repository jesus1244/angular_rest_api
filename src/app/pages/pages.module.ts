import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { AdminComponent } from './admins/admin.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    InicioComponent,
    AdminComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    InicioComponent,
    AdminComponent,
    LoginComponent
  ]
})
export class PagesModule { }
