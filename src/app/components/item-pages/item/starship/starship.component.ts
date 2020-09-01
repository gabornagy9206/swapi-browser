import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {
  id: number;
  selectedItem: any;

  constructor(private router: ActivatedRoute, private swapi: SwapiService) {}

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));

    this.swapi.getSwapiData('starships', this.id + 1).subscribe(res => {
      this.selectedItem = res;
    });
  }
}
