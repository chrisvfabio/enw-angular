import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'enw-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuToggle.emit(true);
  }
}
