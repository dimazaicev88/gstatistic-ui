import {Component} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TabViewModule} from "primeng/tabview";
import {TableModule, TablePageEvent} from "primeng/table";

@Component({
  selector: 'app-indexing-page',
  standalone: true,
  imports: [
    PrimeTemplate,
    TabViewModule,
    TableModule
  ],
  templateUrl: './indexing-page.component.html',
  styleUrl: './indexing-page.component.css'
})
export class IndexingPageComponent {
  rowsPerPage = 7;
  totalRecords = 0;
  isLoading = false;

  onPageChange($event: TablePageEvent) {

  }
}
