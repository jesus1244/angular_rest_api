// To parse this data:
//
//   import { Convert, API } from "./file";
//
//   const aPI = Convert.toAPI(json);

import { Time } from "@angular/common";

export interface API {
    Usuarios: Usuario[];
}

export interface Usuario {
    id:             number;
    nombres:        string;
    usuario:        string;
    password:       string;
    tipo_documento: string;
    documento:      number;
    token:          string;
}

export interface User {
    id:             number;
    nombre:         string;
    apellidos:      string;
    tipo_documento: string;
    documento:      number;
    phone:          number;
    email:          string;
}

export interface detalle{
    id_reserva:     number;
    id_usuario:     number;
    id_admin:       number;
    id_canchas:     number;
    fecha:          Date;
    hora:           Time;
    nombre:         string;
    nombres:        string;
    apellidos:      string;
    tipo_cancha:    string;
    size:           string;
    ubicacion:      string;
}

export interface canchas{
    id:             number;
    tipo_cancha:    string;
    ubicacion:      string;
    estado:         string;
    size:           string;
    implementos:    string;
}


// Converts JSON strings to/from your types
export class Convert {
    public static toAPI(json: string): API {
        return JSON.parse(json);
    }

    public static aPIToJson(value: API): string {
        return JSON.stringify(value);
    }
}
