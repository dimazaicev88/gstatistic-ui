import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftMenuComponent} from "./shared/components/left-menu/left-menu.component";
import {StatisticPageComponent} from "./statistic/pages/statistic/statistic-page.component";
import {HitsPageComponent} from "./visitors/pages/hits/hits-page.component";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {SessionVisitorsPageComponent} from "./visitors/pages/session-visitors/session-visitors-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftMenuComponent, StatisticPageComponent, HitsPageComponent, ToastModule, SessionVisitorsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'gstatisitc-ui';
}
