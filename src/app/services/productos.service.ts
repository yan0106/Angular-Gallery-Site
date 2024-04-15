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

    this.http.get<Producto[]>('https://angular-gallery-site-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
      this.productos = resp;
      this.cargando = false;
     /* setTimeout(() => {
        this.cargando = false;
      }, 2000);*/ //Este código es para verificar que esté funcionando el Loading..
    });
  }

  getProducto(id: string){

   return this.http.get<ProductoDescripcion>(`https://angular-gallery-site-default-rtdb.firebaseio.com/productos/${ id }.json`)

  }

  buscarProducto (termino: string) {

    this.productosFiltrado = this.productos.filter( producto=> {

      return true;
    })

    console.log( this.productosFiltrado );

  }

}
