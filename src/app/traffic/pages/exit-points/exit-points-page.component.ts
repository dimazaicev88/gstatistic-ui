import {Component} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule, TablePageEvent} from "primeng/table";

@Component({
  selector: 'app-exit-points-page',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule
  ],
  templateUrl: './exit-points-page.component.html',
  styleUrl: './exit-points-page.component.css'
})
export class ExitPointsPageComponent {
  rowsPerPage = 7;
  totalRecords = 0;
  isLoading = false;

  onPageChange($event: TablePageEvent) {

  }
}
