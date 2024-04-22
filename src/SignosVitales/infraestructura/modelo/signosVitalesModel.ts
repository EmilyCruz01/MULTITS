import { AutoIncrement, Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName:"SignosVitales",
})
class SVModel extends Model{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    public id_sv!:number

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    public pulso!:number

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    public oximetria!:number

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    public temperatura!:number
}

export default SVModel;