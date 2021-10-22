import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBig]'
})
export class BigDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';

   }


}