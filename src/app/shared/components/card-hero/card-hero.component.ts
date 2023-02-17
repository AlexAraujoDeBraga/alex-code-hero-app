import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {

  heroes: Hero [] = [];

  constructor() { }

  ngOnInit(): void {
    this.heroes = new Array<Hero>();
    this.heroes = [
      {img: '../../../../assets/img/photo.png', name: 'Jason Macandela'},
      {img: '../../../../assets/img/photo.png', name: 'Jason Macandela'},
      {img: '../../../../assets/img/photo.png', name: 'Jason Macandela'},
      {img: '../../../../assets/img/photo.png', name: 'Jason Macandela'},
      {img: '../../../../assets/img/photo.png', name: 'Jason Macandela'},
      {img: '../../../../assets/img/photo.png', name: 'Jason Macandela'}
    ]
  }

}

class Hero {
  img?: string;
  name?: string;
}
