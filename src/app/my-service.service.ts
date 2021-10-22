import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  data: string = 'Erdem3';
  constructor() {}

  getData(): string {
    return this.data;
  }
}
