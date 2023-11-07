export class TejidoIndustrial {

    id: String
    imagen: String
    color: String
    texto: String
    tipo: String
    cedula:String
    nombre:String

    constructor(
        id: String,
        imagen: String,
        color: String,
        texto: String,
        tipo: String,
        cedula:String,
        nombre:String
    ) {
        this.id = id
        this.imagen = imagen
        this.color = color
        this.texto = texto
        this.tipo = tipo
        this.cedula = cedula
        this.nombre = nombre
    }
}