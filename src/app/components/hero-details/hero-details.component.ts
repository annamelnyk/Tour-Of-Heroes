import { Observable } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { HERO, HEROES } from 'src/app/heroes';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent implements OnInit {
  // private route!: ActivatedRoute;
  // private location!: Location;
  private herousCollection: HERO[] = HEROES;
  public heroDetails: HERO | undefined;
  public id!: any;
  hero: string = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit(): void {
    console.log('this.loc', this.location);
    console.log('this.route', this.route);
    console.log('this.heroDetails', this.heroDetails);
    this.route.params.subscribe((params) => (this.id = +params['id']));
    console.log('ID ', this.id);
  
    //const id = Number(this.route.snapshot.paramMap.get('id'));
  
    this.heroDetails = this.herousCollection.find(
      (hero: HERO) => hero.id === this.id
    );
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    console.log('submitted');
  }

  showHeroName(): string {
    return this.hero || this.heroDetails?.name || '';
  }
}
