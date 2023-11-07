export class Estampado {

    id: String
    imagen: String
    descripcion: String
    tipo: String
    cedula:String
    nombre:String

    constructor(
        id: String,
        imagen: String,
        descripcion: String,
        tipo: String,
        cedula:String,
        nombre:String
    ) {
        this.id = id
        this.imagen = imagen
        this.descripcion = descripcion
        this.tipo = tipo
        this.cedula = cedula
        this.nombre = nombre
    }
}