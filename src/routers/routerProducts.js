import { Router } from "express";
import { productosPostController } from "../controllers/productosPostController.js";
import { productManager } from "../managers/productManager.js";

export const routerProducts = Router();
routerProducts.post("/", autenticacion, productosPostController);

routerProducts.get("/", async (req,res,next) => {
    try{
        const productos = await productManager.encontrar()
        res.status(201).json(productos)
    }
    catch(error){
        next(error)
    }
})

routerProducts.put("/:code", async (req,res,next) => {
        try{
            const cambio = req.body
            const codigoProducto = req.params.code;
            const producto = productManager.actualizarUnoConCódigo(codigoProducto, cambio)
            res.status(201).json(producto)
        }
        catch(error){
            next(error)
        }
})

routerProducts.delete("/:code", async (req,res,next) => {
    try {
        const codigoProducto = req.params.code;
        const producto = productManager.borrarUnoConCódigo(codigoProducto)
        res.status(201).json(producto)
    } 
    catch (error) {
        next(error)
    }
})