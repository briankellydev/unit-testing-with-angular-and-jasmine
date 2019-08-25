import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Doggo, DoggoApiResponse } from 'src/app/interfaces/doggo.interface';
import { take } from 'rxjs/operators';
import { DoggoService } from 'src/app/services/doggo.service';

@Component({
  selector: 'app-doggo-landing',
  templateUrl: './doggo-landing.component.html',
  styleUrls: ['./doggo-landing.component.scss']
})
export class DoggoLandingComponent implements OnInit {

  doggos: Doggo[] = [];
  currentIndex = 0;
  loading = true;
  totalDoggos: number;
  remainingTreats: number;
  patsCurrentlyRequired: number;

  constructor(private dataService: DataService, private doggoService: DoggoService) { }

  ngOnInit() {
    this.dataService.getDoggos().pipe(take(1)).subscribe((resp: DoggoApiResponse) => {
      this.doggos = resp.doggos;
      this.totalDoggos = resp.totalDoggos;
      this.remainingTreats = resp.remainingTreats;
      this.patsCurrentlyRequired = this.doggoService.calculatePats(resp.patsCurrentlyRequired);
      this.loading = false;
    });
  }

  nextDoggo() {
    this.currentIndex = this.currentIndex === this.doggos.length - 1 ? 0 : this.currentIndex + 1;
  }

  previousDoggo() {
    this.currentIndex = this.currentIndex === 0 ? this.doggos.length - 1 : this.currentIndex - 1;
  }

}
