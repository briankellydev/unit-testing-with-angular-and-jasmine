import { DoggoDirective } from './doggo.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div appDoggo>`
})
class TestDoggoComponent {
}


describe('DoggoButtonDirective', () => {
  let component: TestDoggoComponent;
  let fixture: ComponentFixture<TestDoggoComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDoggoComponent, DoggoDirective]
    });
    fixture = TestBed.createComponent(TestDoggoComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('div'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
