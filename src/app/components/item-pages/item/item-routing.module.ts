import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './item.component';
import { PlanetComponent } from './planet/planet.component';
import { StarshipComponent } from './starship/starship.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PersonComponent } from './person/person.component';
import { FilmComponent } from './film/film.component';
import { SpecieComponent } from './specie/specie.component';

const routes: Routes = [
  { path: '', component: ItemComponent },
  {
    path: 'planets/:id',
    component: PlanetComponent
  },
  {
    path: 'starships/:id',
    component: StarshipComponent
  },
  {
    path: 'vehicles/:id',
    component: VehicleComponent
  },
  {
    path: 'people/:id',
    component: PersonComponent
  },
  {
    path: 'films/:id',
    component: FilmComponent
  },
  {
    path: 'species/:id',
    component: SpecieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule {}
