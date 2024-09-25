import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {TabViewModule} from "primeng/tabview";
import {TableModule} from "primeng/table";
import {PanelModule} from "primeng/panel";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-statistic-page',
  standalone: true,
  imports: [
    CardModule,
    TabViewModule,
    TableModule,
    PanelModule,
    DropdownModule,
    FormsModule
  ],
  templateUrl: './statistic-page.component.html',
  styleUrl: './statistic-page.component.css'
})
export class StatisticPageComponent {
  selectedPeriod: any;
  selectedSite: any;

  periodOptions = [
    { label: '(нет)', value: null },
    { label: 'Сегодня', value: 'today' },
    { label: 'Вчера', value: 'yesterday' },
    { label: 'Неделя', value: 'week' }
  ];

  siteOptions = [
    { label: '(все)', value: null },
    { label: 'Сайт 1', value: 'site1' },
    { label: 'Сайт 2', value: 'site2' }
  ];

  visitsData = [
    { parameter: 'Хитов', today: 13981, yesterday: 17592, dayBeforeYesterday: 12841, total: 2747144038 },
    { parameter: 'Хостов', today: 3, yesterday: 6, dayBeforeYesterday: 13, total: 87855065 },
    { parameter: 'Сессий', today: 4, yesterday: 12, dayBeforeYesterday: 14, total: 181384081 },
    { parameter: 'Событий', today: 216, yesterday: 113, dayBeforeYesterday: 8, total: 184926882 },
    { parameter: 'Посетителей', today: 4, yesterday: 12, dayBeforeYesterday: 14, total: 136944931 },
    { parameter: 'Новых', today: 4, yesterday: 12, dayBeforeYesterday: 14, total: 136944931 },
    { parameter: 'Online', today: 0, yesterday: 0, dayBeforeYesterday: 0, total: 0 }
  ];
}
