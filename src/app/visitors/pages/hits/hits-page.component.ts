import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {ButtonDirective} from "primeng/button";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-hits-page',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    ButtonDirective,
    TableModule
  ],
  templateUrl: './hits-page.component.html',
  styleUrl: './hits-page.component.css'
})
export class HitsPageComponent {

}
