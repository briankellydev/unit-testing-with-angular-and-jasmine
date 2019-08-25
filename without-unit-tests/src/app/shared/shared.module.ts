import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DoggoDirective } from './doggo.directive';
import { GoodBoyPipe } from './good-boy.pipe';



@NgModule({
  declarations: [CardComponent, DoggoDirective, GoodBoyPipe],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, DoggoDirective, GoodBoyPipe],
})
export class SharedModule { }
