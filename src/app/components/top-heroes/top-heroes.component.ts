import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from 'src/app/services/ui.service';
import { HEROES, HERO } from 'src/app/heroes';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})
export class TopHeroesComponent {
  private heroes: HERO[] = HEROES;
  subscription: Subscription;
  showDashboard: boolean = false;

  constructor(private uiServise: UiService) {
  this.subscription = this.uiServise.onShowHideHeroes()
  .subscribe((value) => this.showDashboard = value);
  }

  showOnlyTopHeroes(): HERO[] {
    return this.heroes.filter(hero => hero.top)
  }

  onShowDashboard() {
    this.uiServise.onShowHideHeroes();
  }


}
