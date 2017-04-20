import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'enw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500)
      ])
    ]),
  ]
})
export class AppComponent {
  title = 'enw works!';
}
