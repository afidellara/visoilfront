export class Cofeccion{
    id: String;
    imagen: String;
    descripcion: String;
    abjuntas: String;
    tipoTela: String;
    cantidad: Number;
    tipo: String;
    cedula:String;
    nombre:String;

    constructor(id:String, imagen:String, descripcion:String,abjuntas:String, tipoTela:String,
        cantidad:Number,tipo:String,cedula:String,nombre:String){
            this.id=id
            this.imagen=imagen
            this.descripcion=descripcion
            this.abjuntas = abjuntas
            this.tipoTela = tipoTela
            this.cantidad = cantidad
            this.tipo = tipo
            this.cedula = cedula
            this.nombre = nombre
    }

}