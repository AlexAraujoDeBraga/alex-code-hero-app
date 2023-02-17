import { HeroAPIService } from './../../../core/services/heroAPI.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {

  heroes: any = [];

  constructor(private heroApiService: HeroAPIService) { }

  ngOnInit(): void {

    this.heroApiService.getAllHeroes().subscribe(
      next => this.heroes = next.data.results,
      error =>  console.log(error),
      () => console.log("End call API: getAllHeroes() method")
    )

  }
}
