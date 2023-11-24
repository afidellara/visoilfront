export class Estampado {

    id: String
    imagen: String
    descripcion: String
    tipo: String
    cedula:String
    nombre:String
    estado: String
    telefono: String
    constructor(
        id: String,
        imagen: String,
        descripcion: String,
        tipo: String,
        cedula:String,
        nombre:String,
        estado: String,
        telefono: String
    ) {
        this.id = id
        this.imagen = imagen
        this.descripcion = descripcion
        this.tipo = tipo
        this.cedula = cedula
        this.nombre = nombre
        this.estado = estado
        this.telefono = telefono
    }
}
