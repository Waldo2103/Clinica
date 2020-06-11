export class Profesional {
    public correo: string;
    public nombre: string;
    public apellido: string;
    public dni: number;
    //public foto: string;
    public especialidades: string;
    public horarios: string;
    public habilitado: boolean;

    constructor() {
        this.correo = '';
        this.nombre = '';
        this.apellido = '';
        this.dni = 0;
        //this.foto = '';
        this.especialidades = '';
        this.horarios = '';
        this.habilitado = false;
    }
}

export class ProfesionalAConfirmar {
    public correo: string;
    public nombre: string;
    public apellido: string;
    public dni: number;
    //public foto: string;
    public especialidades: string;
    public horarios: string;
    public habilitado: boolean;

    constructor() {
        this.correo = '';
        this.nombre = '';
        this.apellido = '';
        this.dni = 0;
        //this.foto = '';
        this.especialidades = '';
        this.horarios = '';
        this.habilitado = false;
    }
}
