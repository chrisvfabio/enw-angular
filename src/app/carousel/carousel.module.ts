import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { MdButtonModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [
    CarouselComponent
  ],
  declarations: [
    CarouselComponent
  ]
})
export class CarouselModule { }
