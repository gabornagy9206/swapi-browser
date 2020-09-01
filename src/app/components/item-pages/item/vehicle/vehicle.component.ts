import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  id: number;
  selectedItem: any;

  constructor(private router: ActivatedRoute, private swapi: SwapiService) {}

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));

    this.swapi.getSwapiData('vehicles', this.id).subscribe(res => {
      this.selectedItem = res;
    });
  }
}
