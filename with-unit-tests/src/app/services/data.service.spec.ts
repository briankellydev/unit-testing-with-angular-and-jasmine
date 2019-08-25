import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

describe('DataService', () => {
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DataService,
      {provide: HttpClient, useValue: httpClientSpy},
    ],
    imports: []
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should get doggos', () => {
    httpClientSpy.get.and.returnValue('abc');
    const service: DataService = TestBed.get(DataService);
    expect(service.getDoggos()).toBe('abc' as any);
  });
});
