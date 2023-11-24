export class Corte{

  id: String;
  piezaCorte: String;
  tipoTela: String;
  cantidad: Number;
  descripcion: String;
  imagen: String;
  tipo: String;
  cedula:String;
  nombre:String;
  estado: String
  telefono: String

  constructor(id:String, piezaCorte:String, tipoTela:String, cantidad:Number, descripcion:String,
    imagen:String,tipo:String,cedula:String,nombre:String, estado: String, telefono: String){

    this.id = id
    this.piezaCorte=piezaCorte
    this.tipoTela = tipoTela
    this.cantidad=cantidad
    this.descripcion=descripcion
    this.imagen=imagen
    this.tipo=tipo
    this.cedula = cedula
    this.nombre = nombre
    this.estado = estado
    this.telefono = telefono

  }
}
