export class CorteVinillo {
    id: String;
    imagen: String;
    color: String;
    nombre: String;
    descripcion: String;
    texto: String;
    tamanio: String;
    tipo: String;
    cedula:String;
    estado: String;
    telefono: String;


    constructor(
        id: String,
        imagen: String,
        color: String,
        nombre: String,
        descripcion: String,
        texto: String,
        tamanio: String,
        tipo: String,
        cedula:String,
        estado: String,
        telefono: String
    ) {
        this.id = id
        this.imagen = imagen
        this.color = color
        this.nombre = nombre
        this.descripcion = descripcion
        this.texto = texto
        this.tamanio = tamanio
        this.tipo = tipo
        this.cedula = cedula
        this.estado = estado
        this.telefono = telefono
    }
}
