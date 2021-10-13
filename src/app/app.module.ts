import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyServiceService } from './my-service.service';
import { MyPipePipe } from './my-pipe.pipe';
import {MyGuardGuard} from './my-guard.guard';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MyComponentComponent, MyPipePipe],
  providers: [MyServiceService,MyGuardGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
