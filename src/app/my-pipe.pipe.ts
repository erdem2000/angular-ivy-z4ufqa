import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
})
export class MyPipePipe implements PipeTransform {
  transform(value: string, extension1: string = 'Mr. '): string {
    return extension1 + value ;
  }
}
