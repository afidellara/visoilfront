export class Cliente{
    
        cedula: string;
        tipoDocumento: string;
        nombre: string;
        apellido: string;
        genero: string;
        fechaNacimiento: string;
        correo: string;
        telefono: string;
        direccion: string;
        estadoCliente: boolean;
        fotoPerfil: string;
        ciudad: string;
        barrio: string;
        pass: string;
      

   constructor(cedula: string, tipoDocumento: string, nombre: string, apellido: string, genero:string, fechaNacimiento:string, coreeo:string, telefono:string, 
    direccion:string, estadoCliete:boolean, fotoPerfil:string, ciudad:string, barrio:string, pass:string){
        this.cedula=cedula
        this.nombre=nombre
        this.tipoDocumento=tipoDocumento
        this.apellido=apellido
        this.genero=genero
        this.fechaNacimiento=fechaNacimiento
        this.correo=coreeo
        this.telefono=telefono
        this.direccion=direccion
        this.estadoCliente=estadoCliete
        this.fotoPerfil=fotoPerfil
        this.ciudad=ciudad
        this.barrio=barrio
        this.pass=pass
   }
   //modelo producto
}