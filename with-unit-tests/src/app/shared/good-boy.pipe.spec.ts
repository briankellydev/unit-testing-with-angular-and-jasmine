import { GoodBoyPipe } from './good-boy.pipe';
import { MockDoggoResponse } from '../mock-data/doggo-response.json';

describe('GoodBoyPipe', () => {
  it('create an instance', () => {
    const pipe = new GoodBoyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return good doggos', () => {
    const pipe = new GoodBoyPipe();
    expect(pipe.transform(MockDoggoResponse.doggos)).toBe(MockDoggoResponse.doggos[0].name);
  });
});
