import { Paciente } from "../dominio/paciente";
import { PacienteRepositorio } from "../dominio/pacienteRepo";
import PacienteModel from "./models/pacienteModel";

export class SqlPacienteRepositorio implements PacienteRepositorio{
    async addPaciente( nombre:string,apeMaterno:string, apePaterno:string,fecha_nacimiento:Date, edad:number,ciudad:string, direccion:string): Promise<Paciente | null> {
        try {
            const pacienteCreado = await PacienteModel.create({nombre,apeMaterno,apePaterno,fecha_nacimiento,edad,ciudad,direccion});
            return new Paciente(pacienteCreado.nombre,pacienteCreado.apePaterno,pacienteCreado.apeMaterno,pacienteCreado.fecha_nacimiento,pacienteCreado.edad,pacienteCreado.ciudad,pacienteCreado.direccion)
        } catch (error) {
            console.log("Error en sqlAdmin.repositorio en AddAdmin", error);
            return null;
        }
    }

}