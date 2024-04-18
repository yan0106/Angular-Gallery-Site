import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface'
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto [] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos();

  }

  private cargarProductos() {

    return new Promise<void>( ( resolve, reject ) =>{

      this.http.get<Producto[]>('https://angular-gallery-site-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
      this.productos = resp;
      this.cargando = false;
        /*setTimeout(() => {
        this.cargando = false;}, 2000);*/ //Este código es para verificar que esté funcionando el Loading..
      resolve();
      });
    });

  }

  getProducto(id: string){

   return this.http.get<ProductoDescripcion>(`https://angular-gallery-site-default-rtdb.firebaseio.com/productos/${ id }.json`)

  }

  buscarProducto (termino: string) {

    if ( this.productos.length === 0 ){
        //cargar productos
      this.cargarProductos().then ( ()=>{
        //ejecutar después de tener los productos
        //aplicar filtro
        this.filtrarProductos( termino );
      });

    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }

   /* this.productosFiltrado = this.productos.filter( producto=> {

      return true;
    })

    console.log( this.productosFiltrado ); */

  }

  private filtrarProductos( termino : string ) {

    // console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productosFiltrado.push ( prod );
      }

    });

  }

}
