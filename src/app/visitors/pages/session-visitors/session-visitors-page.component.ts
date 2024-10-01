import {Component} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule, TablePageEvent, TableRowSelectEvent} from "primeng/table";
import {Session} from "../../interfaces/session";

@Component({
  selector: 'app-session-visitors-page',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule
  ],
  templateUrl: './session-visitors-page.component.html',
  styleUrl: './session-visitors-page.component.css'
})
export class SessionVisitorsPageComponent {
  sessions: Session[] = [];
  rowsPerPage = 7;
  totalRecords = 0;
  isLoading = false;

  onRowSelect($event: TableRowSelectEvent) {

  }

  onPageChange($event: TablePageEvent) {

  }
}
