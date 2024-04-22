import { Sequelize } from "sequelize-typescript";
import * as dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import SVModel from "../SignosVitales/infraestructura/modelo/signosVitalesModel"


dotenv.config();

export const sequelize = new Sequelize({
    dialect:"mysql",
    database:process.env.DB,
    username: process.env.USER, 
    password: process.env.PASSWORD,
    host:process.env.HOST,
    port:3306,
    models:[SVModel]
});

export async function correrBaseDatos(){
    try {
        await sequelize.authenticate();
        console.log("Conexión lograda");
        await sequelize.sync({force:false});
    } catch (error) {
        console.log("No se puede conectar a la base de datos", error);
    }
}


const config = {
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB,
    password: process.env.PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
}

const pool = mysql.createPool(config);

export async function query(sql: string, params: any[]){
    try{
        const conn = await pool.getConnection();
        console.log("Conexion existosa a la BD");
        const result =  await conn.execute(sql, params);
        conn.release();
        return result;
    } catch(error){
        console.log(error);
        console.log('Se ha producdio un error')
        return null;
    }
}