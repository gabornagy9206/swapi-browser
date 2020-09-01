import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  id: number;
  selectedItem: any;

  constructor(private router: ActivatedRoute, private swapi: SwapiService) {}

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));

    this.swapi.getSwapiData('films', this.id).subscribe(res => {
      this.selectedItem = res;
      console.log(this.selectedItem);
    });
  }
}
