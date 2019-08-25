import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoggoLandingComponent } from './doggo-landing/doggo-landing.component';
import { SurpriseDoggoComponent } from './surprise-doggo/surprise-doggo.component';
import { SharedModule } from '../shared/shared.module';
import { ServicesModule } from '../services/services.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DoggoLandingComponent, SurpriseDoggoComponent],
  imports: [
    CommonModule,
    SharedModule,
    ServicesModule,
    RouterModule,
  ],
  exports: [DoggoLandingComponent, SurpriseDoggoComponent],
})
export class CoreModule { }
