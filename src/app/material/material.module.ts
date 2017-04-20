import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdRippleModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdInputModule,
  MdProgressSpinnerModule,
  MdSidenavModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdRippleModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdSidenavModule
  ]
})
export class MaterialModule { }
