/* tslint:disable: max-line-length */
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import {
  BrowserTransferStateModule
} from '../modules/transfer-state/browser-transfer-state.module';

import { AppComponent } from './app.component';

describe('App Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserTransferStateModule,
        // MaterialModule,
        ReactiveFormsModule,
        // RouterTestingModule.withRoutes(routes),
        // StoreDevToolsModule
        ],
      providers: [],
      declarations: [AppComponent
      // , DashboardComponent, NotFound404Component
      ]
    });
  });

  it('should contain app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // expect(fixture.nativeElement).toContainText('Angular Starter App');
  }));

});
