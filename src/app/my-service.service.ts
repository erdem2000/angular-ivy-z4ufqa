import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn:'root'
  }
)
export class MyServiceService {
  data: string = 'Erdem';
  constructor() {}

  getData(): string {
    return this.data;
  }
}
