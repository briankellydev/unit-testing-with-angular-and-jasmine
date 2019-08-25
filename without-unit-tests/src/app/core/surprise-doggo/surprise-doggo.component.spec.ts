import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseDoggoComponent } from './surprise-doggo.component';

describe('SurpriseDoggoComponent', () => {
  let component: SurpriseDoggoComponent;
  let fixture: ComponentFixture<SurpriseDoggoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpriseDoggoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpriseDoggoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
