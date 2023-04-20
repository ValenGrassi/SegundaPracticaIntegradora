import { usersManager } from "../managers/usersManager";

class UsuariosService{
    async registrar(datosFuturoUsuario){
        const usuarioRegistrado = await usersManager.guardar(datosFuturoUsuario);
        return usuarioRegistrado;
    }
}

export const usuariosService = new UsuariosService()