import {Component} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TabViewModule} from "primeng/tabview";
import {TableModule, TablePageEvent} from "primeng/table";

@Component({
  selector: 'app-transitions-searchers-page',
  standalone: true,
  imports: [
    PrimeTemplate,
    TabViewModule,
    TableModule
  ],
  templateUrl: './transitions-searchers-page.component.html',
  styleUrl: './transitions-searchers-page.component.css'
})
export class TransitionsSearchersPageComponent {
  rowsPerPage = 7;
  totalRecords = 0;
  isLoading = false;

  onPageChange($event: TablePageEvent) {

  }
}
