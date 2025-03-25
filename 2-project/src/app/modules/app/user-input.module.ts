import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputComponent } from '../../components/user-input/user-input.component';

@NgModule({
  declarations: [
    UserInputComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [UserInputComponent]
})
export class UserInputModule { }
