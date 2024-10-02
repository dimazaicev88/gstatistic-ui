import {Component} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule, TablePageEvent} from "primeng/table";

@Component({
  selector: 'app-autodetect-page',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule
  ],
  templateUrl: './autodetect-page.component.html',
  styleUrl: './autodetect-page.component.css'
})
export class AutodetectPageComponent {
  rowsPerPage = 7;
  totalRecords = 0;
  isLoading = false;

  onPageChange($event: TablePageEvent) {

  }
}
