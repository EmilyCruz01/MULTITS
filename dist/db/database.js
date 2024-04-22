"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.correrBaseDatos = exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv = __importStar(require("dotenv"));
//import UserModel from "../Usuario/infraestructura/model/userModel"
//import PublicacionModel from "../Publicacion/infraestructura/model/PublicacionModel";
dotenv.config();
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    database: process.env.DB,
    username: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: 3306,
    // models:[UserModel,PublicacionModel]
});
function correrBaseDatos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.sequelize.authenticate();
            console.log("Conexión lograda");
            yield exports.sequelize.sync({ force: false });
        }
        catch (error) {
            console.log("No se puede conectar a la base de datos", error);
        }
    });
}
exports.correrBaseDatos = correrBaseDatos;
