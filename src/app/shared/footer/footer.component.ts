import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  anio: number = new Date().getFullYear(); // creo una propiedad en la clase que se llama anio

  constructor (public _servicio: InfoPaginaService) {}

}
