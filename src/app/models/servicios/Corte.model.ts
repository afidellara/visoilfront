export class Corte{

  id: String;
  piezaCorte: String;
  tela: String;
  cantidad: Number;
  descripcion: String;
  imagen: String;
  tipo: String;
  cedula:String;
  nombre:String;

  constructor(id:String, piezaCorte:String, tela:String, cantidad:Number, descripcion:String,imagen:String,tipo:String,cedula:String,nombre:String){

    this.id = id
    this.piezaCorte=piezaCorte
    this.tela = tela
    this.cantidad=cantidad
    this.descripcion=descripcion
    this.imagen=imagen
    this.tipo=tipo
    this.cedula = cedula
    this.nombre = nombre
    
  }
}