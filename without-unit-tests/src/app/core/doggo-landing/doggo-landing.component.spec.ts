import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggoLandingComponent } from './doggo-landing.component';

describe('DoggoLandingComponent', () => {
  let component: DoggoLandingComponent;
  let fixture: ComponentFixture<DoggoLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggoLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
