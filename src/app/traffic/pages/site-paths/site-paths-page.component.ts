import {Component} from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {TableModule, TablePageEvent} from "primeng/table";

@Component({
  selector: 'app-site-paths-page',
  standalone: true,
  imports: [
    TabViewModule,
    TableModule
  ],
  templateUrl: './site-paths-page.component.html',
  styleUrl: './site-paths-page.component.css'
})
export class SitePathsPageComponent {
  rowsPerPage = 7;
  totalRecords = 0;
  isLoading = false;

  onPageChange($event: TablePageEvent) {

  }
}
