import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponent } from './components/my-component/my-component.component';

@NgModule({
  declarations: [  //Components, directives, pipes will be declared here
    AppComponent,   //When declaring components here, these will be available in all the app
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [], // Services could be loaded here
  bootstrap: [AppComponent] // This declare the MAIN component
})
export class AppModule { }
