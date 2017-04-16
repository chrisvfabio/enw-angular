import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enw-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides: Slide[];

  constructor() {
    this.slides = [
      {
        title: 'Weight Loss',
        content: `
          Nordic Walkers plant the poles in front of them with an outstretched arm, creating a 
          full body movement and using 90 per cent of the body's muscles.
        `,
        imageUrl: './assets/images/promo-slider/promo1.jpg'
      },
      {
        title: 'Challenge Your Brain',
        content: `
          Whenever you learn something new, you stimulate your brain. Research shows that
          activities which combine cognitive, physical and social aspects are especially beneficial
          for brain health.
        `,
        imageUrl: './assets/images/promo-slider/promo2.jpg'
      }
    ];
  }

  ngOnInit() {
  }

}

export interface Slide {
  title: string;
  content: string;
  imageUrl: string;
}
