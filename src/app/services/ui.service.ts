import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private isTopHeroesShown: boolean = true;
  private subject = new Subject();

  constructor() { }

  showDashboard(): void {
    this.isTopHeroesShown = true;
    this.subject.next(this.isTopHeroesShown)
  }

  showMyHeroes(): void {
    this.isTopHeroesShown = false;
    this.subject.next(this.isTopHeroesShown)
  }

  onShowHideHeroes(): Observable<any> {
    return this.subject.asObservable();
  }
  
}
