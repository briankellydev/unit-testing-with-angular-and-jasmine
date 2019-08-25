import { DoggoDirective } from './doggo.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div appDoggo>`
})
class TestDoggoComponent {
}


describe('DoggoDirective', () => {
  let component: TestDoggoComponent;
  let fixture: ComponentFixture<TestDoggoComponent>;
  let inputEl: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDoggoComponent, DoggoDirective]
    });
    fixture = TestBed.createComponent(TestDoggoComponent);
    component = fixture.componentInstance;
    inputEl = fixture.nativeElement.querySelector('div');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the css', () => {
    expect(inputEl.style.width).toBe('50px');
    expect(inputEl.style.height).toBe('50px');
    expect(inputEl.style.animation).toBe('2s linear 0s infinite normal none running spin');
  });
});
