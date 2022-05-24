import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminComponent } from "./pages/admins/admin.component";
import { PagesGuard } from "./guard/pages.guard";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { LoginComponent } from "./pages/login/login.component";
import { RoleGuard } from "./guard/role.guard";
import { UsersComponent } from "./pages/users/users.component";


const routes: Routes = [

    {   path: 'login',
        // canActivate: [PagesGuard],
        component: LoginComponent,
    },
    {
        path: '',
        canActivate: [PagesGuard],
        component: InicioComponent
        
    },
    {
        path: 'users',
        canActivate: [PagesGuard],
        component: UsersComponent
    },
    {
        path: 'admins',
        data: { expectedRole: 'admin' },
        canActivate: [RoleGuard],
        component: AdminComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}