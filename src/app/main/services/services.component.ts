import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BackendService } from 'app/shared/backend.service';
import { MdDialog } from '@angular/material';
import { BookLessonDialogComponent } from 'app/shared/dialogs/book-lesson-dialog/book-lesson-dialog.component';

@Component({
  selector: 'enw-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  haveAGoForm: FormGroup;
  presentationForm: FormGroup;
  haveAGoSubmittingForm = false;
  presentationSubmittingForm = false;
  lessons: Lesson[];

  constructor(private fb: FormBuilder,
    private backend: BackendService,
    public _dialog: MdDialog) { }

  ngOnInit() {
    this.haveAGoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', []],
    });

    this.presentationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      organisationName: ['', []],
      phone: ['', []],
    });

    this.lessons = this.getSampleLessons();
  }

  haveAGoSubmit(formGroup: FormGroup) {
    if (formGroup.valid) {
      alert('Submit');
      this.haveAGoSubmittingForm = true;

      // TODO: Call EmailService
    }
  }

  presentationSubmit(formGroup: FormGroup) {
    if (formGroup.valid) {
      alert('Submit');
      this.presentationSubmittingForm = true;

      // TODO: Call EmailService
    }
  }

  openBookingClassesDialog(lesson: Lesson) {
    const dialogRef = this._dialog.open(BookLessonDialogComponent, {
      width: '60%',
      height: '80%'
    });
    dialogRef.componentInstance.lesson = lesson;

    // dialogRef.afterClosed()
    //   .subscribe(result => {
    //     if (result) {

    //     }
    //   });
  }

  hasFieldError(formGroup: FormGroup, control: FormControl) {
    return control.invalid && formGroup.invalid && control.touched;
  }

  getSampleLessons(): Lesson[] {
    return [
      {
        id: 1,
        name: 'Heart Foundation Walking Group',
        content: `
          <h2>REPS ROAMERS</h2> (Anyone welcome to join)

          <p>
            Moderate pace walks. It is opportunity to keep Nordic Walking 
            and meet new people. Register your interest to find out more. 
          </p>

          <p>
            Join us after you've experienced the Have-a-Go Session. 
          </p>

          <p>
            * Pole Hire Price $5.00
          </p>
        `,
        thumbnailUrl: '/assets/images/baltas-patrick.jpg'
      },
      {
        id: 2,
        name: 'Once a Week for 4 weeks',
        content: `
          <p>
            Participate in one Nordic Walks once a week for four weeks. If 
            you're interested in being a more active Nordic Walker, then join 
            us for 1 hour session for four weeks.
          </p>

          <p>
            * We can also come to your location if requested over the phone.
          </p>
        `,
        thumbnailUrl: '/assets/images/vermont-south-seniors.jpg'
      },
      {
        id: 3,
        name: '4 Weeks in 1 Walk',
        content: `
          <p>
            Ready to take it to the next level? Join this 2 to 3 hour session 
            (depending on the group size) and learn the complete technique.
          </p>

          <p>
            * We can also come to your location if requested over the phone.
          </p>
        `,
        thumbnailUrl: '/assets/images/nordic-senior3.jpg'
      }
    ];
  }
}

export class Lesson {
  id: number;
  name: string;
  content: string;
  thumbnailUrl: string;
}
