import { SqlAdminRepositorio } from "./sqlAdminRepo";
import { EncriptServiHelpers } from "./helpers/EncryptHelper";

import { AddAdminCasoUso } from "../aplicacion/addAdminUseCase";
import { AddAdminController } from "./controllers/addAdminController";

import { DeleteAdminCasoUso } from "../aplicacion/deletePacientUseCase";
import { DeleteAdminController } from "./controllers/deleteAdminController";

import { GetByIdAdminCasoUso } from "../aplicacion/getPacientByIdUseCase";
import { GetByIdAdminController } from "./controllers/getAdminById";



export const encriptService = new EncriptServiHelpers();

export const sqlAdminRepositorio = new SqlAdminRepositorio();
export const addAdminCasoUso = new AddAdminCasoUso(sqlAdminRepositorio,encriptService);
export const addAdminController = new AddAdminController(addAdminCasoUso);

export const deleteAdminCasoUso = new DeleteAdminCasoUso(sqlAdminRepositorio);
export const deleteAdminController = new DeleteAdminController(deleteAdminCasoUso);

export const getByIdAdminCasoUso = new GetByIdAdminCasoUso(sqlAdminRepositorio);
export const getByIdAdminController = new GetByIdAdminController(getByIdAdminCasoUso);