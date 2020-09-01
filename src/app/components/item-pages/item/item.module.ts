import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { FilmComponent } from './film/film.component';
import { PersonComponent } from './person/person.component';
import { PlanetComponent } from './planet/planet.component';
import { SpecieComponent } from './specie/specie.component';
import { StarshipComponent } from './starship/starship.component';
import { VehicleComponent } from './vehicle/vehicle.component';

@NgModule({
  declarations: [
    ItemComponent,
    FilmComponent,
    PersonComponent,
    PlanetComponent,
    SpecieComponent,
    StarshipComponent,
    VehicleComponent
  ],
  imports: [CommonModule, ItemRoutingModule]
})
export class ItemModule {}
