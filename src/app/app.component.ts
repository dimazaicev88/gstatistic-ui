import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftMenuComponent} from "./shared/components/left-menu/left-menu.component";
import {StatisticPageComponent} from "./statistic/pages/statistic/statistic-page.component";
import {HitsPageComponent} from "./visitors/pages/hits/hits-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftMenuComponent, StatisticPageComponent, HitsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gstatisitc-ui';
}
