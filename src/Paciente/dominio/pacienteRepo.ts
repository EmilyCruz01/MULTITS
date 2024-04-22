import { Paciente } from "./paciente";

export interface PacienteRepositorio{
    addPaciente(nombre:string,apeMaterno:string, apePaterno:string,fecha_nacimiento:Date, edad:number,ciudad:string, direccion:string):Promise<Paciente | null>;

}