import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  id: number;
  selectedItem;

  constructor(private router: ActivatedRoute, private swapi: SwapiService) {}

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));

    this.swapi.getSwapiData('people', this.id).subscribe(res => {
      this.selectedItem = res;
    });
  }
}
