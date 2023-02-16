import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CardHeroComponent } from './components/card-hero/card-hero.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    CardHeroComponent,
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    CardHeroComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
