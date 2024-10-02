import { Component } from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TabViewModule} from "primeng/tabview";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-attentiveness',
  standalone: true,
  imports: [
    PrimeTemplate,
    TabViewModule,
    TableModule
  ],
  templateUrl: './attentiveness.component.html',
  styleUrl: './attentiveness.component.css'
})
export class AttentivenessComponent {

}
