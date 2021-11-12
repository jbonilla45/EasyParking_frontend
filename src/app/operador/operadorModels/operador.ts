export class Operador {
    _id?: number;
    nombre: string;
    apellido: string;
    cargo: string;

    constructor(nombre: string, apellido: string, cargo: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
    }
}