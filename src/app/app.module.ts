import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyPipePipe } from './my-pipe.pipe';
import { BigDirective } from './big.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MyComponentComponent, BigDirective, MyPipePipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
