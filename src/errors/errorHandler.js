export function errorHandler(error, req, res, next) {
    // si el error es de autenticacion, devolver estado 401
    //sino:
    const respuesta = {}
    switch (error.message) {
        case "error de autenticacion":
            res.status(401)
            respuesta.status = "error"
        default:
            res.status(500)
            respuesta.status = "error"
    }
    respuesta.descripcion = error.message
    res.json(respuesta);
}