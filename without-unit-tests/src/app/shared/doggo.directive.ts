import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDoggo]'
})
export class DoggoDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.width = '50px';
    el.nativeElement.style.height = '50px';
    el.nativeElement.style.animation = 'spin 2s linear infinite';
  }

}
