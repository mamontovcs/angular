import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { ServerStatusComponent } from '../../components/dashboard/server-status/server-status.component';
import { TicketsComponent } from '../../components/dashboard/tickets/tickets.component';
import { TrafficComponent } from '../../components/dashboard/traffic/traffic.component';
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { DashboardItemComponent } from '../../components/dashboard/dashboard-item/dashboard-item.component';
import { NewTicketComponent } from '../../components/new-ticket/new-ticket.component';
import { ButtonComponent } from "../../shared/button/button.component";
import { ControlComponent } from "../../shared/control/control.component";

@NgModule({
  declarations:
    [
      AppComponent,
      HeaderComponent,

      DashboardComponent,
      DashboardItemComponent,
      ServerStatusComponent,
      TicketsComponent,
      TrafficComponent,
      NewTicketComponent
    ],
  imports: [
    BrowserModule,
    ButtonComponent,
    ControlComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
