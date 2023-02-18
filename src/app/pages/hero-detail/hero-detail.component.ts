import { Router } from '@angular/router';
import { HeroAPIService } from './../../services/heroAPI.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  heroDetail: any = [];

  constructor(private heroApiService: HeroAPIService, private router: Router) { }

  ngOnInit(): void {
    this.heroApiService.getSeriesOfSelectedHero().subscribe(
      next => this.heroDetail = next.data.results,
      error =>  console.log(error),
      () => console.log("End call getSeriesOfSelectedHero method")
    )
  }

  // ngOnDestroy(): void {
  //   this.heroDetail = null;
  // }

  backToHome() {
    this.router.navigateByUrl('');
  }

}
