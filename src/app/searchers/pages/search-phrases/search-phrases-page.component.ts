import {Component} from '@angular/core';
import {TableModule, TablePageEvent} from "primeng/table";

@Component({
  selector: 'app-search-phrases-page',
  standalone: true,
  imports: [
    TableModule
  ],
  templateUrl: './search-phrases-page.component.html',
  styleUrl: './search-phrases-page.component.css'
})
export class SearchPhrasesPageComponent {
  rowsPerPage = 7;
  totalRecords = 0;
  isLoading = false;

  onPageChange($event: TablePageEvent) {

  }
}
