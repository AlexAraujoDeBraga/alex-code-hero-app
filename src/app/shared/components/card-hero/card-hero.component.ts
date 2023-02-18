import { HeroAPIService } from './../../../services/heroAPI.service';
import { Component, Input, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {

  @Input() heroesFilter: any [] = [];

  heroesList = [];
  heroSelected: any;
  heroes:any = [];
  items: any = [];
  itemsPorPagina: number = 10;
  public selectedPage = 1;

  constructor(private heroApiService: HeroAPIService, private router: Router) { }

  ngOnInit(): void {
    let pageIndex = (this.selectedPage - 1) * this.itemsPorPagina;

    this.heroApiService.getAllHeroes().subscribe((data) => {
      this.heroesFilter.length > 0 ? this.heroes = this.heroesFilter : this.heroes = data.data.results
      this.items = this.heroes.slice(pageIndex, this.itemsPorPagina);
  });

  }

  detailPage(heroDetail: any) {
    this.heroApiService.selectHeroForDetail(heroDetail);
    this.router.navigateByUrl('/hero-detail');
  }

  changePageSize(event: Event) {
    const newSize = (event.target as HTMLInputElement).value
    this.itemsPorPagina = Number(newSize);
    this.changePage(1);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.heroes.length / this.itemsPorPagina))
      .fill(0).map((x,i) => i+1);
  }

  changePage(page: any){
    this.selectedPage = page;
    this.slicedItems();
  }

  slicedItems() {
    let pageIndex = (this.selectedPage - 1) * this.itemsPorPagina;
    let endIndex = (this.selectedPage - 1) * this.itemsPorPagina + this.itemsPorPagina;
    // this.items = this.heroes.slice(pageIndex, this.itemsPorPagina);
    this.items = [];
    this.items = this.heroes.slice(pageIndex, endIndex);
  }
}
