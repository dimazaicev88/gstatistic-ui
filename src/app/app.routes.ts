import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'statistic',
    loadChildren: () => import('./statistic/pages/statistic/statistic-page.component').then(m => m.StatisticPageComponent)
  }
];
