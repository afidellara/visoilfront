export class Administrador {

    codigo: string
    correo: string
    password: string
    estado: boolean

    constructor(
        codigo: string,
        correo: string,
        password: string,
        estado: boolean
    ) {
        this.codigo = codigo
        this.correo = correo
        this.password = password
        this.estado = estado
    }

}