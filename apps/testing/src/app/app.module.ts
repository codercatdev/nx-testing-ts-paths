import { HelloWorldModule } from '@myworkspace/hello-world';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HelloWorldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
