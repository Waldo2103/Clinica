import { Paciente } from './paciente';
import { Profesional } from './profesional';
import { especialidad } from './especialidad';

export class turno {
    idTurno: string; 
    fecha: string;
    hora:string;
    especialidad:especialidad;
    paciente:Paciente;
    profesional:Profesional;
    tomado:boolean;
    cancelado:boolean;
    observaciones:string; 
    constructor() {
        
    }

}