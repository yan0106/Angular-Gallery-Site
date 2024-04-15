import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [ //para los Pipes, Components, entre otros
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [ // para los modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // para realizar peticiones put, get, delete, entre otras, a servidores rest
  ],
  providers: [], // usualmente los servicios se colocaban acá pero A en el mismo servicio, ya dice dónde lo inyecta. Ya no es necesario.
  bootstrap: [AppComponent]
})
export class AppModule { }
