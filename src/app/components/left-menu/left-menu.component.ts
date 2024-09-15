import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {PanelMenuModule} from "primeng/panelmenu";
import {MenuModule} from "primeng/menu";

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [
    PanelMenuModule,
    MenuModule
  ],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Сводная статистика'
      },
      {
        label: 'Посещаемость',
      },
      {
        label: 'Рекламные кампании',
      },
      {
        label: 'События',
      },
      {
        label: 'Поисковики',
      },
      {
        label: 'Ссылающиеся сайты',
      },
      {
        label: 'Посетители',
      },
      {
        label: 'Кто на сайте',
      }
    ];
  }
}

