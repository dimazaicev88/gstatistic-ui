import {Component} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule, TablePageEvent} from "primeng/table";
import {Visits} from "../../interfaces/visits";

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule
  ],
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {
  visits: Visits[] = [];
  rowsPerPage: number | undefined;
  totalRecords = 0;
  isLoading = false;

  onPageChange($event: TablePageEvent) {

  }
}
