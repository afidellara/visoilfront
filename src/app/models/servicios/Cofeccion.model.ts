export class Cofeccion{
    id: String;
    imagen: String;
    descripcion: String;
    abjuntas: String;
    tipoTela: String;
    cantidad: Number;
    tipo: String;

    constructor(id:String, imagen:String, descripcion:String,abjuntas:String, tipoTela:String,
        cantidad:Number,tipo:String){
            this.id=id
            this.imagen=imagen
            this.descripcion=descripcion
            this.abjuntas = abjuntas
            this.tipoTela = tipoTela
            this.cantidad = cantidad
            this.tipo = tipo
    }

}