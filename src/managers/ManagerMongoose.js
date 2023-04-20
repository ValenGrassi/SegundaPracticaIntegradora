import mongoose from "mongoose";

export class ManagerMongoose {
    constructor(nombreCollecion, schema) {
        this.collection = mongoose.model(nombreCollecion, new mongoose.Schema(schema, {versionKey: false}));
    }

    async guardar(registro){
       return await this.collection.create(registro)
    }

    async encontrar(){
        return await this.collection.find().lean()
    }

    async actualizarUnoConCódigo(codigo, cambio){
        return await this.collection.findOneAndUpdate({code: codigo},cambio)
    }
    
    async borrarUnoConCódigo(codigo){
        return await this.collection.findOneAndRemove(codigo)
    }

    async obtenerSegunCampo({campo,valor}){
        const criterio = {}
        criterio[campo] = valor
        const buscado = await this.collection.findOne(criterio).lean()
        if(!buscado){
            throw new Error("no encontrado")
        } else{
            return buscado
        }

    }
}
