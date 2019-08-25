import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoggoApiResponse } from '../interfaces/doggo.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDoggos(): Observable<DoggoApiResponse> {
    return this.http.get<DoggoApiResponse>('assets/data/doggo-types.json');
  }
}
