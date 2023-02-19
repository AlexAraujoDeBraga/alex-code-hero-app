import { HeroAPIService } from './../../../services/heroAPI.service';
import { Component, Input, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
  heroesPorPagina: any = [];
  itemsPorPagina: number = 10;
  iterator: number = 0;
  public selectedPage = 1;

  getHeroSubscription?: Subscription;

  constructor(private heroApiService: HeroAPIService, private router: Router) { }

  ngOnInit(): void {
    let pageIndex = (this.selectedPage - 1) * this.itemsPorPagina;

    this.getHeroSubscription = this.heroApiService.getAllHeroes().subscribe((data) => {
      this.heroesFilter.length > 0 ? this.heroes = this.heroesFilter : this.heroes = data.data.results
      this.heroesPorPagina = this.heroes.slice(pageIndex, this.itemsPorPagina);
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

  onNext(value: number) {
    this.iterator = this.selectedPage + value;
    if (this.iterator <= this.pageNumbers.length) {
      this.selectedPage = this.selectedPage + value;
      this.slicedItems();
    } else {
      this.iterator = this.iterator -1;
    }
  }

  onNextAll() {
    this.selectedPage = this.pageNumbers.length;
    this.slicedItems();
  }

  onPrev(value: number) {
    this.iterator = this.selectedPage + value;
    if (this.iterator >= 0 && this.selectedPage > 1) {
        this.selectedPage = this.selectedPage + value;
        this.slicedItems();
    } else {
      this.iterator = this.iterator + 1;
    }
  }

  onPrevAll() {
    this.selectedPage = 1;
    this.slicedItems();
  }

  slicedItems() {
    let pageIndex = (this.selectedPage - 1) * this.itemsPorPagina;
    let endIndex = (this.selectedPage - 1) * this.itemsPorPagina + this.itemsPorPagina;
    this.heroesPorPagina = [];
    this.heroesPorPagina = this.heroes.slice(pageIndex, endIndex);
  }
}
