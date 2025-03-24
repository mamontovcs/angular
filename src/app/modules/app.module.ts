import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { HeaderComponent } from "../components/header/header.component";
import { UserComponent } from "../components/user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { UsersComponent } from "../components/users/users.component";
import { SharedModule } from "./shared.module";
import { TasksModule } from "./tasks.module";

@NgModule({
    declarations:
        [
            AppComponent,
            HeaderComponent,
            UsersComponent,
            UserComponent
        ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {

}