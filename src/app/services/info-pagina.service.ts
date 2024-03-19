import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient){

      this.cargarInfo();
      this.cargarEquipo();

   }

   private cargarInfo() {
    // Leer el archivo JSON y tomar sus propiedades para que pueda ser utilizado en las páginas. Necesito un módulo que me permita hacer peticiones HTTP
    this.http.get('assets/data/data-pagina.json')
    .subscribe ((resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;
    });
   }

   private cargarEquipo() {

    this.http.get('https://angular-gallery-site-default-rtdb.firebaseio.com/equipo.json')
    .subscribe ((resp: any) => {
      this.equipo = resp;
      //console.log(resp);
    });

   }

}
