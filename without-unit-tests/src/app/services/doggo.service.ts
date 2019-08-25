import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoggoService {

  constructor() { }

  calculatePats(pats: number) {
    return pats * 500;
  }
}
