import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto} from '../interfaces/producto.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos();

  }

  private cargarProductos() {

    this.http.get<Producto[]>('https://angular-gallery-site-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {

      console.log(resp);
      this.productos = resp;
      this.cargando = false;

     /* setTimeout(() => {
        this.cargando = false;
      }, 2000);*/ //Este código es para verificar que esté funcionando el Loading..

    });
  }

}
