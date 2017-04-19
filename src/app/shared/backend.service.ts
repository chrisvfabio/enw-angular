import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BackendService {

  // private url = 'https://essentialnordicwalking.com.au/api';
  private url = 'http://localhost:4200/api';

  constructor(private http: Http) { }

  registerInterest(firstName: string, lastName: string, email: string, phone: string = null, phoneTime: string = null) {
    this.http
      .post(`${this.url}/forms/register`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        phoneTime: phoneTime
      })
      .subscribe(
      (data) => {

      },
      (error) => {

      });
  }

  registerClass(classSession: ClassSession): Observable<BackendResponse> {
    if (!classSession) {
      return Observable.throw({
        message: 'Unable to process request.'
      });
    }

    this.http.post(`${this.url}/classes/register`, classSession)
      .map(res => res.json())
      .catch(this._handleError);
  }

  registerPresentation(presentationRequest: PressentationRequest) {
    if (!presentationRequest) {
      return Observable.throw({
        message: 'Unable to process request.'
      });
    }

    this.http.post(`${this.url}/presentations/register`, presentationRequest)
      .map(res => res.json())
      .catch(this._handleError);
  }

  // Returns the message part of an error specific to the API.
  private _handleError(error: any) {
    return Observable.throw(error.json().message || 'Unexpected server error.');
  }
}

export class ClassSession {
  name: string;
  email: string;
  phone?: string;
  sessionId: number;
  equipmentHire?: boolean;
}

export class Session {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export class PressentationRequest {
  name: string;
  email: string;
  organisationName?: string;
  phone?: string;
}

export class BackendResponse {
  message: string;
}
