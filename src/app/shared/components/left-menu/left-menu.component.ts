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
        label: 'Сводная статистика',
        routerLink: "/statistic"
      },
      {
        label: 'Посещаемость',
        items: [
          {
            label: 'Динамика',
            icon: 'pi pi-plus',
            routerLink: "/traffic/dynamic"
          },
          {
            label: 'Разделы и страницы',
            icon: 'pi pi-search',
            routerLink: "/traffic/rubric-and-pages"
          },
          {
            label: 'Точки входа',
            icon: 'pi pi-search',
            routerLink: "/traffic/entry-points"
          },
          {
            label: 'Пути по сайту',
            icon: 'pi pi-search',
            routerLink: "/traffic/site-path"
          },
          {
            label: 'Пути по сайту',
            icon: 'pi pi-search',
            routerLink: "/traffic/site-path"
          },
          {
            label: 'Внимательность',
            icon: 'pi pi-search',
            routerLink: "/traffic/attentiveness"
          },
          {
            label: 'География по странам',
            icon: 'pi pi-search',
            routerLink: "/traffic/geography-country"
          },
          {
            label: 'География по городам',
            icon: 'pi pi-search',
            routerLink: "/traffic/geography-cities"
          }
        ]
      },
      {
        label: 'Рекламные кампании',
        items: [
          {
            label: 'Список кампаний',
            icon: 'pi pi-plus',
            routerLink: "/adv/list-company"
          }, {
            label: 'Сравнение кампаний',
            icon: 'pi pi-plus',
            routerLink: "/adv/compare-company"
          },
        ]
      },
      {
        label: 'События',
        items: [
          {
            label: 'Типы событий',
            icon: 'pi pi-plus',
            routerLink: "/events/event-types"
          }, {
            label: 'События',
            icon: 'pi pi-plus',
            routerLink: "/events/events"
          },
        ]
      },
      {
        label: 'Поисковики',
        items: [
          {
            label: 'Переходы с поисковиков',
            icon: 'pi pi-plus',
            routerLink: "/searchers/transitions-searchers"
          },
          {
            label: 'Список фраз',
            icon: 'pi pi-plus',
            routerLink: "/searchers/search-phrases"
          },
          {
            label: 'Индексация',
            icon: 'pi pi-plus',
            routerLink: "/searchers/indexing"
          },
          {
            label: 'Автодетект',
            icon: 'pi pi-plus',
            routerLink: "/searchers/autodetect"
          },
        ]
      },
      {
        label: 'Ссылающиеся сайты',
        items: [
          {
            label: 'Сайты',
            icon: 'pi pi-plus',
            routerLink: "/referring-sites/sites"
          },
          {
            label: 'События',
            icon: 'pi pi-plus',
            routerLink: "/referring-sites/pages"
          },
          {
            label: 'Переходы',
            icon: 'pi pi-plus',
            routerLink: "/referring-sites/transitions"
          },
        ]
      },
      {
        label: 'Посетители', items: [
          {
            label: 'Список посетителей',
            icon: 'pi pi-plus',
            routerLink: "/visitors/list-visitors"
          },
          {
            label: 'Сессии посетителей',
            icon: 'pi pi-plus',
            routerLink: "/visitors/session-visitors"
          },
          {
            label: 'Хиты',
            icon: 'pi pi-plus',
            routerLink: "/visitors/hits"
          },
          {
            label: 'Стоп-лист',
            icon: 'pi pi-plus',
            routerLink: "/visitors/stop-list"
          }
        ]
      },
      {
        label: 'Кто на сайте',
        routerLink: "/online"
      }
    ];
  }
}

