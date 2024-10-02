import {Component} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule, TablePageEvent} from "primeng/table";

@Component({
  selector: 'app-rubric-and-pages-page',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule
  ],
  templateUrl: './rubric-and-pages-page.component.html',
  styleUrl: './rubric-and-pages-page.component.css'
})
export class RubricAndPagesPageComponent {
  rowsPerPage = 7;
  totalRecords = 0;
  isLoading = false;

  onPageChange($event: TablePageEvent) {

  }
}
