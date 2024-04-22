import { Request, Response } from "express";
import { AddPacienteCasoUso } from "../../aplicacion/addPacienteUseCase";

export class AddPacienteController{
    constructor(readonly addPacienteCasoUso:AddPacienteCasoUso){}
    async run(req:Request, res:Response){
        try{
            let nombre = req.body.nombre;
            let apePaterno = req.body.apePaterno;
            let apeMaterno = req.body.apeMaterno;
            let edad = req.body.edad;
            let fecha_nacimiento = req.body.fecha_nacimiento;
            let ciudad= req.body.ciudad;
            let direccion = req.body.direccion;
            console.log(req.body);

            let pacienteCreado = await this.addPacienteCasoUso.run(nombre,apeMaterno,apePaterno,fecha_nacimiento,edad,ciudad,direccion);

            if(pacienteCreado){
                return res.status(200).send({
                    status:"success",
                    data:{
                        nombre: pacienteCreado.nombre,
                        apePaterno:pacienteCreado.apePaterno,
                        apeMaterno:pacienteCreado.apeMaterno,
                        fecha_nacimiento:pacienteCreado.fecha_nacimiento,
                        edad:pacienteCreado.edad,
                        ciudad:pacienteCreado.ciudad,
                        direccion:pacienteCreado.direccion
                    },
                    message:"Paciente guardado exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error registrar Paciente en addpacienteController"
                })
            }
        }catch(error){
            console.log("Error en addPacienteController",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}