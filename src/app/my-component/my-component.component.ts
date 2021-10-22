import { Component, OnInit } from '@angular/core';
import { MyGuardGuard } from '../my-guard.guard';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnInit {
  data: string;
  constructor(
    private myService: MyServiceService,
    private myGuard: MyGuardGuard
  ) {}

  ngOnInit() {
    this.data = this.myService.getData();
    console.log(this.myGuard.canActivate());
  }
}
