import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
  @Input() name: string = 'Button';
  @Input() buttonTheme?: string = 'grey';
  @Output() clickHandler = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log();
  }

  onClick() {
    console.log(';clicked');
    this.clickHandler.emit();
  }
}
