import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'enw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  registerForm: FormGroup;
  cards: InfoCard[];

  submittingForm = false;

  constructor(private fb: FormBuilder,
    private http: Http,
    private snackBar: MdSnackBar,
    @Inject(PLATFORM_ID) public platformId: Object) {
    this.cards = [
      {
        title: 'Have-a-Go Sessions',
        subTitle: 'Introduction',
        imageUrl: './assets/images/cards/card1.jpg',
        route: {
          name: 'services',
          data: {
            section: 'haveAGo'
          }
        },
        content: `
          Learn the core fundamentals of Nordic Walking, and experience a introductory session.
          <br><br>
        `
      },
      {
        title: 'Equipment',
        subTitle: 'Buy or Hire Equipment',
        imageUrl: './assets/images/cards/card2.jpg',
        route: {
          name: 'products',
          data: {}
        },
        content: `
          Learn how to use the core equipment needed for Nordic Walking
          and have the opportunity to hire
          them for each session or purchase your own.
        `
      },
      {
        title: 'Range of Group Classes',
        subTitle: 'Classes',
        imageUrl: './assets/images/cards/card3.jpg',
        route: {
          name: 'services',
          data: {
            section: 'classes'
          }
        },
        content: `
          Experience a 4 session course with a group of fellow Nordic Walkers.
           Take your skills to the next
          level and try out the course today.
        `
      },
    ];
  }

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', []],
      phoneTime: ['', []]
    });
  }

  registerSubmit(formGroup: FormGroup) {
    if (formGroup.valid) {
      this.submittingForm = true;

      this.http
        .post(`http://api.essentialnordicwalking.com.au/api/emails`, {
          name: this.registerForm.value.name,
          email: this.registerForm.value.email,
          phone: this.registerForm.value.phone,
          notes: `Preferred Phone Time: ${this.registerForm.value.phoneTime}`
        })
        .subscribe(
        data => {
          this.registerForm.reset({});
          this.registerForm.clearValidators();
          this.snackBar.open('Message sent successfully.', null, {
            duration: 3000
          });
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

export interface InfoCard {
  title: string;
  subTitle: string;
  content: string;
  imageUrl: string;
  route: any;
}

