import { Component } from '@angular/core';
import {TabViewModule} from "primeng/tabview";

@Component({
  selector: 'app-geography-country-page',
  standalone: true,
  imports: [
    TabViewModule
  ],
  templateUrl: './geography-country-page.component.html',
  styleUrl: './geography-country-page.component.css'
})
export class GeographyCountryPageComponent {

}
