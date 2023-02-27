import { Component, Input } from '@angular/core';
import { HERO } from 'src/app/heroes';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() hero!: HERO;
}
