import { Router } from "express";
import { productManager } from "../managers/productManager.js";

const routerWeb = Router();

routerWeb.get("/", async (req,res) => {
    const productos = await productManager.encontrar()
    res.render("home", {hayProductos: productos.length > 0, productos});
    console.log(productos)
})


routerWeb.get("/realtimeproducts", async (req,res) => {
    const productos = await productManager.encontrar()
    res.render("realTimeProducts", {hayProductos: productos.length > 0, productos})
})
export default routerWeb;