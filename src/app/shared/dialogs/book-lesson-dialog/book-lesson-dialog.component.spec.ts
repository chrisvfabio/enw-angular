import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLessonDialogComponent } from './book-lesson-dialog.component';

describe('BookLessonDialogComponent', () => {
  let component: BookLessonDialogComponent;
  let fixture: ComponentFixture<BookLessonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLessonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLessonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
