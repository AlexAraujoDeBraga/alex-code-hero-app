import { HeroAPIService } from './../../../services/heroAPI.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {

  heroSelected: any;

  heroes: any = [];

  constructor(private heroApiService: HeroAPIService, private router: Router) { }

  ngOnInit(): void {

    this.heroApiService.getAllHeroes().subscribe(
      next => this.heroes = next.data.results,
      error =>  console.log(error),
      () => console.log("End call getAllHeroes method")
    )

  }

  detailPage(heroDetail: any) {
    this.heroApiService.selectHeroForDetail(heroDetail);
    this.router.navigateByUrl('/hero-detail');
  }
}
