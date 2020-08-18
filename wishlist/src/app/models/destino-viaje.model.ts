export class DestinoViaje {
  private nombre: string;
  private imagenUrl: string;
  private selected: boolean;
  private servicios: string[]; 

  constructor(n: string, u: string) {
    this.nombre = n;
    this.imagenUrl = u;
    this.servicios = ['desayuno', 'piscina'];
  }

  getSelected(): boolean{
    return this.selected;
  }

  setSelected(s: boolean){
    this.selected = s;
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(n: string): void {
    this.nombre = n;
  }

  getImagenUrl(): string {
    return this.imagenUrl
  }

  setImagenUrl(u: string): void {
    this.imagenUrl = u;
  }

  getServicios(): string[] {
    return this.servicios;
  }

}