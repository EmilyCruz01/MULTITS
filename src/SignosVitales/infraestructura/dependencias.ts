import { AddSignsUseCase } from "../aplicacion/addSignsUseCase";
import { MysqlSVRepository } from "./SVRepository";
import { AddSignsController } from "./controllers/addSignsController";
import { NewSigns } from "./servicios/rabbit";
import { NewSignsUseCase } from "../aplicacion/servicios/NewSigns";

export const mysqlSVRepository=new MysqlSVRepository();
export const newSigns= new NewSigns();
export const newSignsUseCase= new NewSignsUseCase(newSigns);
export const addSignsUseCase= new AddSignsUseCase(mysqlSVRepository, newSignsUseCase);
export const addSignsController= new AddSignsController(addSignsUseCase);

