import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HeroAPIService } from 'src/app/services/heroAPI.service';
import { map, startWith } from 'rxjs/operators';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() sendFiltroEvent = new EventEmitter<string>();

  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions?: Observable<string[]>;
  getHeroSubscription?: Subscription;

  _searchItem: string = "";

  get searchItem(): string {
    return this._searchItem;
  }

  set searchItem(value) {
    this._searchItem = value;
    this.searchHero(this._searchItem);
  }

  heroSelected: any;
  heroes: any = [];

  constructor(private heroApiService: HeroAPIService, private router: Router) { }

  ngOnInit(): void {

    this.getHeroSubscription = this.heroApiService.getAllHeroes().subscribe((data) => {
      this.heroes = JSON.stringify(data.data.results);
      this.heroes = JSON.parse(this.heroes);

      for (let hero of this.heroes) {
        this.options.push(hero.name);
      }

      }, (err) => {
        console.log("erro lista países " + err);
      });


  }

  ngOnDestroy(): void {
    this.getHeroSubscription?.unsubscribe;
  }

  searchHero(searchItem: string) {
    this._filter(searchItem);
    for (let hero of this.heroes) {
      if (searchItem === hero.name)
      this.heroApiService.selectHeroForDetail(hero);
    }
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    let optionsForSend: string[] = [];

    optionsForSend = this.options.filter(option => option.toLowerCase().includes(filterValue));
    this.sendFiltro(optionsForSend);

  }

  sendFiltro(value: any) {
    this.sendFiltroEvent.emit(value);
  }

}
