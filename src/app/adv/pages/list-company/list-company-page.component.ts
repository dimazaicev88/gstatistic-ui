import {Component} from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-list-company-page',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule
  ],
  templateUrl: './list-company-page.component.html',
  styleUrl: './list-company-page.component.css'
})
export class ListCompanyPageComponent {
  adv: any[] = [];

}
