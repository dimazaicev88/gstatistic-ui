import {Component} from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {TableModule, TablePageEvent} from "primeng/table";

@Component({
  selector: 'app-event-types-page',
  standalone: true,
  imports: [
    TabViewModule,
    TableModule
  ],
  templateUrl: './event-types-page.component.html',
  styleUrl: './event-types-page.component.css'
})
export class EventTypesPageComponent {
  rowsPerPage = 7;
  totalRecords = 0;
  isLoading = false;

  onPageChange($event: TablePageEvent) {

  }
}
