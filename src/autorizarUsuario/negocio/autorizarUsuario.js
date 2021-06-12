async function crearAutorizador(dao,enviador) {

    return {
        autorizarUsuario: async (idUsuario) => {
            
            const usuario = await dao.getById(idUsuario)
            const usuarioUpdated = { ...usuario, publicarTextos: true }
            await dao.update(usuarioUpdated)
            console.log(await dao.getAll())
            
            const to = usuario.email
            const subject = '¡Usuario actualizado!'
            const texto = 'Su usuario ahora puede publicar textos en el Área Común.'
            await enviador.enviar(texto, to, subject)
        }
    }
}

export { crearAutorizador }