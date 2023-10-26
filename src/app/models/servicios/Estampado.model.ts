export class Estampado {

    id: String
    imagen: String
    descripcion: String
    tipo: String

    constructor(
        id: String,
        imagen: String,
        descripcion: String,
        tipo: String
    ) {
        this.id = id
        this.imagen = imagen
        this.descripcion = descripcion
        this.tipo = tipo
    }
}