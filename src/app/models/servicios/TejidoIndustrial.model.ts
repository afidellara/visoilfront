export class TejidoIndustrial {

    id: String
    imagen: File
    color: String
    texto: String
    tipo: String
    cedula:String
    nombre:String
    estado: String
    telefono: String
    constructor(
        id: String,
        imagen: File,
        color: String,
        texto: String,
        tipo: String,
        cedula:String,
        nombre:String,
        estado: String,
        telefono: String
    ) {
        this.id = id
        this.imagen = imagen
        this.color = color
        this.texto = texto
        this.tipo = tipo
        this.cedula = cedula
        this.nombre = nombre,
        this.estado = estado
        this.telefono = telefono
    }
}
