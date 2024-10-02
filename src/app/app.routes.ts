import {Routes} from '@angular/router';
import {StatisticPageComponent} from "./statistic/pages/statistic/statistic-page.component";

export const routes: Routes = [
  {
    path: '',
    component: StatisticPageComponent,
  },

  //Traffic
  {
    path: 'traffic/dynamic',
    loadComponent: () => import('./traffic/pages/dynamic/dynamic-page.component')
      .then(mod => mod.DynamicPageComponent),
  },
  {
    path: 'traffic/rubric-and-pages',
    loadComponent: () => import('./traffic/pages/rubric-and-pages/rubric-and-pages-page.component')
      .then(mod => mod.RubricAndPagesPageComponent),
  },
  {
    path: 'traffic/entry-points',
    loadComponent: () => import('./traffic/pages/entry-points/entry-points-page.component')
      .then(mod => mod.EntryPointsPageComponent),
  },
  {
    path: 'traffic/site-path',
    loadComponent: () => import('./traffic/pages/site-paths/site-paths-page.component')
      .then(mod => mod.SitePathsPageComponent),
  },
  {
    path: 'traffic/attentiveness',
    loadComponent: () => import('./traffic/pages/attentiveness/attentiveness.component')
      .then(mod => mod.AttentivenessComponent),
  },
  {
    path: 'traffic/geography-country',
    loadComponent: () => import('./traffic/pages/geography-country/geography-country-page.component')
      .then(mod => mod.GeographyCountryPageComponent),
  },
  {
    path: 'traffic/geography-cities',
    loadComponent: () => import('./traffic/pages/geography-cities/geography-cities-page.component')
      .then(mod => mod.GeographyCitiesPageComponent),
  },

  //Adv
  {
    path: 'adv/list-company',
    loadComponent: () => import('./adv/pages/list-company/list-company-page.component')
      .then(mod => mod.ListCompanyPageComponent),
  },
  {
    path: 'adv/compare-company',
    loadComponent: () => import('./adv/pages/compare-company/compare-company-page.component')
      .then(mod => mod.CompareCompanyPageComponent),
  },

  //Events
  {
    path: 'events/event-types',
    loadComponent: () => import('./events/pages/event-types/event-types-page.component')
      .then(mod => mod.EventTypesPageComponent),
  },
  {
    path: 'vents/events',
    loadComponent: () => import('./events/pages/events/events-page.component')
      .then(mod => mod.EventsPageComponent),
  },

  //Searchers
  {
    path: 'searchers/transitions-searchers',
    loadComponent: () => import('./searchers/pages/transitions-searchers/transitions-searchers-page.component')
      .then(mod => mod.TransitionsSearchersPageComponent),
  },
  {
    path: 'searchers/search-phrases',
    loadComponent: () => import('./searchers/pages/search-phrases/search-phrases-page.component')
      .then(mod => mod.SearchPhrasesPageComponent),
  },
  {
    path: 'searchers/indexing',
    loadComponent: () => import('./searchers/pages/indexing/indexing-page.component')
      .then(mod => mod.IndexingPageComponent),
  },
  {
    path: 'searchers/autodetect',
    loadComponent: () => import('./searchers/pages/autodetect/autodetect-page.component')
      .then(mod => mod.AutodetectPageComponent),
  },

  //Referring sites
  {
    path: 'referring-sites/sites',
    loadComponent: () => import('./referring-sites/pages/sites/sites-page.component')
      .then(mod => mod.SitesPageComponent),
  },
  {
    path: 'referring-sites/pages',
    loadComponent: () => import('./referring-sites/pages/pages/pages-page.component')
      .then(mod => mod.PagesPageComponent),
  },
  {
    path: 'referring-sites/transitions',
    loadComponent: () => import('./referring-sites/pages/transitions/transitions-page.component')
      .then(mod => mod.TransitionsPageComponent),
  },

  //Visitors
  {
    path: 'visitors/list-visitors',
    loadComponent: () => import('./visitors/pages/list-visitors/list-visitors-page.component')
      .then(mod => mod.ListVisitorsPageComponent),
  },
  {
    path: 'visitors/session-visitors',
    loadComponent: () => import('./visitors/pages/session-visitors/session-visitors-page.component')
      .then(mod => mod.SessionVisitorsPageComponent),
  },
  {
    path: 'visitors/hits',
    loadComponent: () => import('./visitors/pages/hits/hits-page.component')
      .then(mod => mod.HitsPageComponent),
  },
  {
    path: 'visitors/stop-list',
    loadComponent: () => import('./visitors/pages/stop-list/stop-list-page.component')
      .then(mod => mod.StopListPageComponent),
  },
  {
    path: 'online',
    loadComponent: () => import('./online/pages/online/online-page.component')
      .then(mod => mod.OnlinePageComponent),
  }
];
