import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient){

      // console.log('Servicio de infoPagina listo');

      // Para leer el archivo JSON y tomar sus propiedades para que pueda ser utilizado en las páginas. Necesito un módulo que me permita hacer peticiones HTTP
      this.http.get('assets/data/data-pagina.json')
        .subscribe ((resp: InfoPagina) => {

          this.cargada = true;
          this.info = resp;
          console.log(resp);

        });

   }
}
