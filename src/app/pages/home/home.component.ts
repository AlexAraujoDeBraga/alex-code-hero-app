import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listHeroes:any = [
    {heroesNameList: []},
    {heroesList: []}
  ];

  showCard: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.showCard = true;
  }

  filtroHeroes(value: any) {

    this.listHeroes[0].heroesNameList = value[0].heroesNameList;
    this.listHeroes[1].heroesList = value[1].heroesList;

    if (this.listHeroes[1].heroesList != null) {
      this.showCard = false;
    }

    setTimeout(() => {
      this.showCard = true;
    });
  }

}
