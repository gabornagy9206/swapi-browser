import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss']
})
export class SpecieComponent implements OnInit {
  id: number;
  selectedItem: any;

  constructor(private router: ActivatedRoute, private swapi: SwapiService) {}

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));

    this.swapi.getSwapiData('species', this.id).subscribe(res => {
      this.selectedItem = res;
    });
  }
}
