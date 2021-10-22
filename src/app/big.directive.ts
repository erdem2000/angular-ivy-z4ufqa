import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBig2]',
})
export class BigDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
