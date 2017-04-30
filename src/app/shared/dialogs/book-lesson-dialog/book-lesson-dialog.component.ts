import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Lesson } from 'app/main/services/services.component';

@Component({
  selector: 'enw-book-lesson-dialog',
  templateUrl: './book-lesson-dialog.component.html',
  styleUrls: ['./book-lesson-dialog.component.scss']
})
export class BookLessonDialogComponent implements OnInit {

  bookLessonForm: FormGroup;
  submittingForm = false;
  lesson: Lesson;

  constructor(private _dialogRef: MdDialogRef<BookLessonDialogComponent>,
    private fb: FormBuilder) { }

  ngOnInit() {
    if (!this.lesson) {
      console.error('Lesson must be defined.');
    }

    this.bookLessonForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', []],
      hireEquipment: [false, []]
    });
  }

  bookLessonSubmit(formGroup: FormGroup) {
    if (formGroup.valid) {
      this.submittingForm = true;
    }
  }

  hasFieldError(formGroup: FormGroup, control: FormControl) {
    return control.invalid && formGroup.invalid && control.touched;
  }

}
