import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MaterialModule } from 'app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselModule } from 'app/carousel/carousel.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookLessonDialogComponent } from 'app/shared/dialogs/book-lesson-dialog/book-lesson-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    MainRoutingModule,
    CarouselModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent,
    LoginComponent,
    LogoutComponent,
  ],
  bootstrap: [
  ]
})
export class MainModule { }
