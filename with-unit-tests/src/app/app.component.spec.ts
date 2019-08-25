import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Subject } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    // Before running fixture.detectChanges we want to mock the rxjs interval
    component.colorInterval = new Subject();
    fixture.detectChanges();
  });

  // Standard testing that we haven't missed any dependencies, there are no major template problems, etc.
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // Test the logic in ngOnInit(). Since asynchronous code exists in ngOnInit, we run in the fakeAsync zone
  // and call tick() when we're ready to run the async code.
  it('should initialize', fakeAsync(() => {
    // TypeScript is mad at our mocking. Typecasting in testing is generally no biggie
    (component.colorInterval as any).next();
    tick();
    // We can only test public methods and properties
    expect(component.currentColor).toBe('lightyellow');
  }));
});
