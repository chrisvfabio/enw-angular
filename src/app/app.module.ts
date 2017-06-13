import { ReactiveFormsModule } from '@angular/forms';
import { ApplicationRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  BrowserTransferStateModule
} from '../modules/transfer-state/browser-transfer-state.module';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';

import {
  MdToolbarModule,
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdIconModule,
  MdSidenavModule,
  MdListModule,
  MdProgressSpinnerModule,
  MdDialogModule,
  MdRadioModule,
  MdSnackBarModule,
  MdGridListModule,
  MdProgressBarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import {
  BookLessonDialogComponent
} from './shared/dialogs/book-lesson-dialog/book-lesson-dialog.component';
import {
  HomeComponent,
  AboutComponent,
  ServicesComponent,
  ProductsComponent,
  LoginComponent,
  LogoutComponent
} from './main/index';

import { CarouselModule } from './carousel/carousel.module';
import { BackendService } from './shared/backend.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,

    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent,
    LoginComponent,
    LogoutComponent,

    BookLessonDialogComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    DEV_SERVER ? [BrowserAnimationsModule, BrowserTransferStateModule] : [],
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'products', component: ProductsComponent },

      { path: 'login', component: ProductsComponent },
      { path: 'logout', component: ProductsComponent },
      { path: '**', redirectTo: '/' },
    ]),

    CarouselModule,

    TransferHttpModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdProgressSpinnerModule,
    MdDialogModule,
    MdRadioModule,
    MdSnackBarModule,
    MdGridListModule,
    MdProgressBarModule
  ],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  entryComponents: [
    BookLessonDialogComponent
  ],
})

export class AppModule {
}
