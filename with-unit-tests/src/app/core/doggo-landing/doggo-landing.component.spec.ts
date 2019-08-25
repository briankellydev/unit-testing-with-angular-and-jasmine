import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DoggoLandingComponent } from './doggo-landing.component';
import { DataService } from 'src/app/services/data.service';
import { DoggoService } from 'src/app/services/doggo.service';
import { of } from 'rxjs';
import { MockDoggoResponse } from 'src/app/mock-data/doggo-response.json';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('DoggoLandingComponent', () => {
  let component: DoggoLandingComponent;
  let fixture: ComponentFixture<DoggoLandingComponent>;

  // Mock service objects- we just need to have methods and properties in these objects that we call in the component
  const dataService = {
    // We're feeding mock data in as well
    getDoggos: () => of(MockDoggoResponse),
  };
  const doggoService = {
    calculatePats: (value: number) => value * 2
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggoLandingComponent ],
      // We need to mock all non-angular injections
      providers: [
        {provide: DataService, useValue: dataService},
        {provide: DoggoService, useValue: doggoService},
      ],
      imports: [ SharedModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Sanity check
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test the logic in ngOnInit(). Since asynchronous code exists in ngOnInit, we run in the fakeAsync zone
  // and call tick() when we're ready to run the async code.
  it('should initialize', fakeAsync(() => {
    tick();
    expect(component.doggos).toEqual(MockDoggoResponse.doggos);
    expect(component.totalDoggos).toEqual(MockDoggoResponse.totalDoggos);
    expect(component.remainingTreats).toEqual(MockDoggoResponse.remainingTreats);
    expect(component.patsCurrentlyRequired).toEqual(MockDoggoResponse.patsCurrentlyRequired * 2);
    expect(component.loading).toBe(false);
  }));

  it('should call nextDoggo', () => {
    // This function has two branching conditions. We should test them both.
    // It relies on doggo data. Instead of running fakeAsync / our init logic, we can just give it some data.
    component.doggos = MockDoggoResponse.doggos;
    component.nextDoggo();
    expect(component.currentIndex).toBe(1);
    // MockDoggoResponse.length is 2, so we should reset if we call it again.
    component.nextDoggo();
    expect(component.currentIndex).toBe(0);
  });

  it('should call previousDoggo', () => {
    // This function has two branching conditions. We should test them both.
    component.doggos = MockDoggoResponse.doggos;
    // MockDoggoResponse.length is 2, so we should go to the end of the array.
    component.previousDoggo();
    expect(component.currentIndex).toBe(1);
    component.previousDoggo();
    expect(component.currentIndex).toBe(0);
  });
});
