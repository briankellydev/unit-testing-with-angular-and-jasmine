import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoggoLandingComponent } from './core/doggo-landing/doggo-landing.component';
import { SurpriseDoggoComponent } from './core/surprise-doggo/surprise-doggo.component';


const routes: Routes = [
  {
    path: '',
    component: DoggoLandingComponent
  },
  {
    path: 'surprise',
    component: SurpriseDoggoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
