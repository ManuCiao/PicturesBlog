import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule], // angular app will be used in a web browser and will pack their browser module with the Appmodule when angular compiles our app.
  declarations: [AppComponent],
  bootstrap: [AppComponent]
}) //decorator post process the class
export class AppModule {

}
