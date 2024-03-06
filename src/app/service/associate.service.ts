import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {
baseUrl = 'http://localhost:3000/associate'
  constructor( private http: HttpClient) { }
  getAll() {
    return this.http.get(this.baseUrl)
  }
}
