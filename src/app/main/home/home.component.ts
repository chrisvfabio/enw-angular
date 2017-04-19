import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BackendService } from 'app/shared/backend.service';

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
              private backend: BackendService) {
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
          Learn the core fundamentals of Nordic Walking, and experience a free session.
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
          Learn how to use the core equipment needed for Nordic Walking and have the opportunity to hire 
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
          Experience a 4 session course with a group of fellow Nordic Walkers. Take your skills to the next 
          level and try out the course today.
        `
      },
    ];
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', []],
      phoneTime: ['', []]
    });
  }

  registerSubmit(formGroup: FormGroup) {
    if (formGroup.valid) {
      alert('Submit');
      this.submittingForm = true;

      // TODO: Call EmailService
    }
  }

  hasFieldError(formGroup: FormGroup, control: FormControl) {
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
