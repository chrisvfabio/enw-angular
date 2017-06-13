import { Http } from '@angular/http';
import { Lesson } from '../../../main/services/services.component';
import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

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
    private fb: FormBuilder,
    private http: Http,
    private snackBar: MdSnackBar) { }

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

      this.http
        .post(`http://api.essentialnordicwalking.com.au/api/emails`, {
          name: this.bookLessonForm.value.name,
          email: this.bookLessonForm.value.email,
          phone: this.bookLessonForm.value.phone,
          notes: `Service: ${this.lesson.name};
            Hire Equipment: ${this.bookLessonForm.value.hireEquipment ? 'Yes' : 'No'}`
        })
        .subscribe(
        data => {
          this.bookLessonForm.reset({});
          this.bookLessonForm.clearValidators();
          this.snackBar.open('Enquiry sent successfully.', null, {
            duration: 3000
          });
          this._dialogRef.close();
        },
        error => {
          this.snackBar.open('Error.', null, {
            duration: 3000
          });
        }, () => this.submittingForm = false);
    }
  }

  hasFieldError(formGroup: FormGroup, control: AbstractControl) {
    return control.invalid && formGroup.invalid && control.touched;
  }

}
