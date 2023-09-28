export class Producto{
    codigo:string; 
    nombre:string; 
    descripcion:string; 
    precio: number; 
    categoria:string; 
    referencia:string; 
    imagen:string; 
    tela:string; 
    talla:string; 
    medida:string; 
    disenio:string; 

    constructor(
         codigo: string,
         nombre: string,
         descripcion: string,
         precio: number,
         categoria: string,
         referencia: string,
         imagen: string,
         tela: string,
         talla: string,
         medida: string,
         disenio: string
      ) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.referencia = referencia;
        this.imagen = imagen;
        this.tela = tela;
        this.talla = talla;
        this.medida = medida;
        this.disenio = disenio;
      }
}