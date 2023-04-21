import {criptografiador} from "../utils/criptografia.js"

export function autenticacion (req,res,next){
    const token = req.signedCookies.authToken
    if(!token) return next(new Error("error de autenticacion"))
    const user = criptografiador.decodificarToken(token)
    if(!user) return next(new Error("error de autenticacion")) 
    req.user = user
    next()
}

