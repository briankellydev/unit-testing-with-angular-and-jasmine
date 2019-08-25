import { Pipe, PipeTransform } from '@angular/core';
import { Doggo } from '../interfaces/doggo.interface';

@Pipe({
  name: 'goodBoy'
})
export class GoodBoyPipe implements PipeTransform {

  transform(value: Doggo[]): string {
    const goodBoys = value.filter((doggo) => {
      return doggo.isAGoodBoy;
    });
    const goodNames: string[] = [];
    goodBoys.forEach((doggo) => {
      goodNames.push(doggo.name);
    });
    return goodNames.join(', ');
  }

}
