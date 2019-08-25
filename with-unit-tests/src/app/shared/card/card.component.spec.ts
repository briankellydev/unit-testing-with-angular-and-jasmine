import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // There's no TS logic to test, but this is fundamentally a structural component.
  // So, this is a good reason to test the template.
  it('should display a title if it exists', () => {
    // Notice how I took fixture.detectChanges() out of the beforeEach? I want to set up inputs before
    // the component initializes.
    component.title = 'hello world';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.card-title')).nativeElement.innerText).toBe('hello world');
  });

  it('should not display the title if it doesnt exist', () => {
    component.title = null;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.card-title'))).toBeNull();
  });
});
