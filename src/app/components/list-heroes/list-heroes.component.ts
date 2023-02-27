import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from 'src/app/services/ui.service';
import { HEROES, HERO } from 'src/app/heroes';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent {
  heroes: HERO[] = HEROES;
  subscription: Subscription;
  showDashboard: boolean = false;

  constructor(private uiServise: UiService) {
  this.subscription = this.uiServise.onShowHideHeroes()
  .subscribe((value) => this.showDashboard = value);
  }

  onShowMyHeroes() {
    this.uiServise.onShowHideHeroes();
  }

  private compareHeroName( a: HERO, b: HERO ): number {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  sortByName(): HERO[] {
    return this.heroes.sort(this.compareHeroName);
  }

  sortByID(): HERO[] {
    return this.heroes.sort((a: HERO, b: HERO) => a.id - b.id)
  }
}
