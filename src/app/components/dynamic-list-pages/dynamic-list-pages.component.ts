import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-dynamic-list-pages',
  templateUrl: './dynamic-list-pages.component.html',
  styleUrls: ['./dynamic-list-pages.component.scss']
})
export class DynamicListPagesComponent implements OnInit {
  constructor(private swapi: SwapiService) {}

  category = 'people';
  public displayData;

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.swapi.getSwapiData(this.category).subscribe((res) => {
      this.displayData = res;
    });
  }

  public setListData(category: string) {
    this.category = category;
    this.loadData();
  }

  public loadPage(item, direction: string) {
    if (direction === 'next') {
      this.swapi.changePage(item.next).subscribe((res) => {
        this.displayData = res;
      });
    } else if (direction === 'previous') {
      this.swapi.changePage(item.previous).subscribe((res) => {
        this.displayData = res;
      });
    }
  }
}
