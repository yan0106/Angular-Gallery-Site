import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  constructor ( private route: ActivatedRoute){}

  ngOnInit(){

    this.route.params
    .subscribe(parametros =>{ // el suscribe va a estar pendiente de todos los cambios que sucedan con los parámetros de la URL

      console.log(parametros['id']);

    })
}
}
