import { Component } from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-compare-company-page',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule
  ],
  templateUrl: './compare-company-page.component.html',
  styleUrl: './compare-company-page.component.css'
})
export class CompareCompanyPageComponent {

}
