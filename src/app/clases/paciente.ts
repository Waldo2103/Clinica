export class Paciente {
    public correo: string;
    public nombre: string;
    public apellido: string;
    public dni: number;
    public foto: string;

    constructor() {
        this.correo = '';
        this.nombre = '';
        this.apellido = '';
        this.dni = 0;
        this.foto = '';
    }
}

export class PacienteAConfirmar {
    public correo: string;
    public nombre: string;
    public apellido: string;
    public dni: number;
    public foto: string;
    //public clave: string;

    constructor() {
        this.correo = '';
        this.nombre = '';
        this.apellido = '';
        this.dni = 0;
        this.foto = '';
        //this.clave = '';
    }
}
