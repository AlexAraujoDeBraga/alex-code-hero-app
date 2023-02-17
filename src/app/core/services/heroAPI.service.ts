import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroAPIService {

  constructor(private httpClient: HttpClient) { }

  url = 'https://gateway.marvel.com/v1/public/characters?limit=10&ts=1&apikey=25a6983c4d853b1668275832868e5ece&hash=f9f97706164898c7334e4cd3c6d3a3fd';

  getAllHeroes():Observable<any>{
    return this.httpClient.get(this.url);
  }

}
