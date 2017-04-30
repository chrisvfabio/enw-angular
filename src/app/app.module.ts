import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'app/material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { BackendService } from './shared/backend.service';
import { MainModule } from 'app/main/main.module';
import { BookLessonDialogComponent } from './shared/dialogs/book-lesson-dialog/book-lesson-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    BookLessonDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    MainModule // Don't lazy load
  ],
  providers: [
    BackendService
  ],
  entryComponents: [
    BookLessonDialogComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
