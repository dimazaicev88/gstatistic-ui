import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {TabViewModule} from "primeng/tabview";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-statistic-page',
  standalone: true,
  imports: [
    CardModule,
    TabViewModule,
    TableModule
  ],
  templateUrl: './statistic-page.component.html',
  styleUrl: './statistic-page.component.css'
})
export class StatisticPageComponent {

}
