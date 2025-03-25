import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './user-input.module';
import { ResultsModule } from './results.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    UserInputModule,
    ResultsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
