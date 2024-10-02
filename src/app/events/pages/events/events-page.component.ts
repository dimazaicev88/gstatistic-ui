import {Component} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule
  ],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.css'
})
export class EventsPageComponent {
  events: any[] = [];

}
