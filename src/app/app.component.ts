import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftMenuComponent} from "./components/left-menu/left-menu.component";
import {StatisticPageComponent} from "./statistic/pages/statistic-page/statistic-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftMenuComponent, StatisticPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gstatisitc-ui';
}
