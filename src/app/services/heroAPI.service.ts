import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroAPIService {

  heroDetail: any;

  constructor(private httpClient: HttpClient) { }

  apiKey = '&ts=1&apikey=25a6983c4d853b1668275832868e5ece&hash=f9f97706164898c7334e4cd3c6d3a3fd';

  urlHero = 'https://gateway.marvel.com/v1/public/characters?limit=40';

  urlSeries = 'https://gateway.marvel.com/v1/public/characters/'

  getAllHeroes():Observable<any>{
    return this.httpClient.get(this.urlHero+this.apiKey);
  }

  selectHeroForDetail(hero: any) {
    this.heroDetail = hero;
  }

  getSeriesOfSelectedHero():Observable<any> {
    return this.httpClient.get(this.urlSeries+this.heroDetail.id+'/series?'+this.apiKey);
  }

}
