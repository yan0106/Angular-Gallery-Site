import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  producto: ProductoDescripcion;
  id: string = '';

  constructor ( private route: ActivatedRoute,
                public productoService: ProductosService) {

                  this.producto = {} as ProductoDescripcion;
                }

  ngOnInit(){

    this.route.params
    .subscribe( (parametros) =>{ // el suscribe va a estar pendiente de todos los cambios que sucedan con los parámetros de la URL
      // console.log(parametros['id']);

      this.productoService.getProducto(parametros['id'])
      .subscribe((producto: ProductoDescripcion) => {

          this.id = parametros ['id'];
          this.producto = producto;
          console.log(producto);

        })
    })
  }
}
