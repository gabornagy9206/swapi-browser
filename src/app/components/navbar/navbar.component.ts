import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  myForm: FormGroup;

  constructor(private swapi: SwapiService) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      phrase: new FormControl('')
    });
  }

  searchSwapi(phrase) {
    event.preventDefault();
    this.swapi.searchItem(phrase).subscribe(res => {
      console.log(res);
    });
  }
}
