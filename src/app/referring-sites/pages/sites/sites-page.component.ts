import {Component} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule, TablePageEvent} from "primeng/table";

@Component({
  selector: 'app-sites-page',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule
  ],
  templateUrl: './sites-page.component.html',
  styleUrl: './sites-page.component.css'
})
export class SitesPageComponent {
  rowsPerPage = 7;
  totalRecords = 10;
  isLoading = false;

  onPageChange($event: TablePageEvent) {

  }
}
