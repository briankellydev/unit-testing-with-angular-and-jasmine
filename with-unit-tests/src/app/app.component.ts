import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  currentColor: string;
  colorInterval = interval(500);

  private COLOR_ARRAY = ['pink', 'lightyellow', 'lightgreen', 'lightcyan'];
  private currentIndex = 0;
  private destroy$ = new Subject();

  ngOnInit() {
    this.currentColor = this.COLOR_ARRAY[0];
    this.colorInterval.pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.currentIndex !== this.COLOR_ARRAY.length - 1) {
        this.currentIndex += 1;
      } else {
        this.currentIndex = 0;
      }
      this.currentColor = this.COLOR_ARRAY[this.currentIndex];
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
