import { Component } from '@angular/core';
import {TabViewModule} from "primeng/tabview";

@Component({
  selector: 'app-geography-cities-page',
  standalone: true,
  imports: [
    TabViewModule
  ],
  templateUrl: './geography-cities-page.component.html',
  styleUrl: './geography-cities-page.component.css'
})
export class GeographyCitiesPageComponent {

}
