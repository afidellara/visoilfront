export class Cofeccion{
    id: String;
    imagen: String;
    descripcion: String;
    //abjuntas: String;
    tipoTela: String;
    cantidad: Number;
    tipo: String;
    cedula:String;
    nombre:String;
    estado: String;
    telefono: String;

    constructor(id:String, imagen:String, descripcion:String, tipoTela:String,
        cantidad:Number,tipo:String,cedula:String, nombre:String, estado: String, telefono: String){
            this.id=id
            this.imagen=imagen
            this.descripcion=descripcion
            this.tipoTela = tipoTela
            this.cantidad = cantidad
            this.tipo = tipo
            this.cedula = cedula
            this.nombre = nombre
            this.estado = estado
            this.telefono = telefono
    }

}
