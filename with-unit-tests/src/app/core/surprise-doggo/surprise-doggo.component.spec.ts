import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseDoggoComponent } from './surprise-doggo.component';
import { SharedModule } from 'src/app/shared/shared.module';

// No logic or structural DOM stuff, so we don't need to test more than its basic creation.
describe('SurpriseDoggoComponent', () => {
  let component: SurpriseDoggoComponent;
  let fixture: ComponentFixture<SurpriseDoggoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpriseDoggoComponent ],
      imports: [ SharedModule ],
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
