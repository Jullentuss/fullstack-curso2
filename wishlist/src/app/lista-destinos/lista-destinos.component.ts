import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { DestinosApiClient } from '../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})

export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];

  constructor(public destinoApiClient: DestinosApiClient) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.destinoApiClient.subscribeOnchange((d: DestinoViaje) => {
      if (d != null) { this.updates.push(`Se ha elegido a: ${d.getNombre().toString()}`) }
    });
  }

  ngOnInit(): void {
  }

  agregar(d: DestinoViaje) {
    this.destinoApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegir(e: DestinoViaje) {
    this.destinoApiClient.elegir(e);
  }
}