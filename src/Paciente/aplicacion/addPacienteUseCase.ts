import { Paciente } from "../dominio/paciente";
import { PacienteRepositorio } from "../dominio/pacienteRepo";


export class AddPacienteCasoUso{
    constructor(readonly pacienteRepositorio:PacienteRepositorio){}
    
    async run(nombre:string,apeMaterno:string, apePaterno:string,fecha_nacimiento:Date, edad:number,ciudad:string, direccion:string):Promise<Paciente | null>{
        try {
            const pacienteCreado = await this.pacienteRepositorio.addPaciente(nombre,apeMaterno,apePaterno,fecha_nacimiento,edad,ciudad,direccion);
            return pacienteCreado;
        } catch (error) {
            console.log("Error en addPacienteUseCase", error);
            return null;
        }
    }
}