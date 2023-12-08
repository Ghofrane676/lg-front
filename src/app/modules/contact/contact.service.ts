import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:3000/api/send-email'; // URL de votre backend

  constructor(private http: HttpClient) {}

  sendEmail(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
}