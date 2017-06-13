import { Http } from '@angular/http';
import { isPlatformBrowser } from '@angular/common';
import { BackendService } from '../../shared/backend.service';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { MdDialog, MdSnackBar } from '@angular/material';
import { BookLessonDialogComponent }
  from '../../shared/dialogs/book-lesson-dialog/book-lesson-dialog.component';

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
    public _dialog: MdDialog,
    private http: Http,
    private snackBar: MdSnackBar,
    @Inject(PLATFORM_ID) public platformId: Object) {
  }

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

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
      this.haveAGoSubmittingForm = true;

      this.http
        .post(`http://api.essentialnordicwalking.com.au/api/emails`, {
          name: this.haveAGoForm.value.name,
          email: this.haveAGoForm.value.email,
          phone: this.haveAGoForm.value.phone,
          notes: `Service: Have-a-Go Session`
        })
        .subscribe(
        data => {
          this.haveAGoForm.reset({});
          this.haveAGoForm.clearValidators();
          this.snackBar.open('Enquiry sent successfully.', null, {
            duration: 3000
          });
        },
        error => {
          this.snackBar.open('Error.', null, {
            duration: 3000
          });
        }, () => this.haveAGoSubmittingForm = false);
    }
  }

  presentationSubmit(formGroup: FormGroup) {
    if (formGroup.valid) {
      this.presentationSubmittingForm = true;

      this.http
        .post(`http://api.essentialnordicwalking.com.au/api/emails`, {
          name: this.presentationForm.value.name,
          email: this.presentationForm.value.email,
          phone: this.presentationForm.value.phone,
          notes: `Service: Presentation Enquiry`
        })
        .subscribe(
        data => {
          this.presentationForm.reset({});
          this.presentationForm.clearValidators();
          this.snackBar.open('Enquiry sent successfully.', null, {
            duration: 3000
          });
        },
        error => {
          this.snackBar.open('Error.', null, {
            duration: 3000
          });
        }, () => this.presentationSubmittingForm = false);
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

  hasFieldError(formGroup: FormGroup, control: AbstractControl) {
    return control.invalid && formGroup.invalid && control.touched;
  }

  getSampleLessons(): Lesson[] {
    return [
      {
        id: 1,
        name: 'Group Lessons: 4 lessons to learn Nordic Walking',
        content: `
          <p>
            This lesson includes: 4 X 1hr sessions. All sessions include
             flexibility exercises, instruction, stretching.
          </p>

          <p>
            $15 pp/lesson includes pole hire.
          </p>

          <p>
            Participants are encouraged to purchase their own poles so they can practise between
            lessons. Like any new skill, it takes practise to learn.
          </p>
          <p>
            Group size is kept small so participants can be assured of individual attention.
          </p>
          <p>
            Course fee ($60) is payable at the beginning of the first session.
          </p>
        `,
        thumbnailUrl: '/assets/images/baltas-patrick.jpg',
        offer: `
          <h2>Pole and free lesson option</h2>
          <p>
            Order a pair of One Way brand poles and get <u>1 group lesson FREE!</u>
          </p>
        `
      },
      {
        id: 2,
        name: 'Individual Lessons',
        content: `
          <p>
            The 1 hour lessons include flexibility exercises, instruction and stretching.
          </p>

          <p>
            $60/pp includes pole hire.
          </p>
          <p>
            Heather recommends a minimum of 2 lessons.
          </p>
          <p>
            Participants are encouraged to purchase their own poles so they can practise
            between lessons.
          </p>
        `,
        thumbnailUrl: '/assets/images/vermont-south-seniors.jpg',
        offer: `
          <h2>Pole and lesson discount</h2>
          <p>
            Order a pair of One Way brand poles and get <u>$15 OFF</u> your first individual lesson.
          </p>
        `
      },
    ];
  }
}

export class Lesson {
  id: number;
  name: string;
  content: string;
  thumbnailUrl: string;
  offer: string;
}
