import { SqlPacienteRepositorio } from "./mySqlPacienteRepository";
import { AddPacienteCasoUso } from "../aplicacion/addPacienteUseCase";
import { AddPacienteController } from "./controller/addPacienteController";

export const sqlPacienteRepositorio = new SqlPacienteRepositorio();
export const addPacienteCasoUso = new AddPacienteCasoUso(sqlPacienteRepositorio);
export const addPacienteController = new AddPacienteController(addPacienteCasoUso);
