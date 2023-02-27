import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  subscription: Subscription;

  constructor(private uiServise: UiService) {
    this.subscription = this.uiServise.onShowHideHeroes()
    .subscribe();
    }

    onShowDashboard() {
      this.uiServise.showDashboard();
    }

    onShowMyHeroes() {
      this.uiServise.showMyHeroes();
    }

}
