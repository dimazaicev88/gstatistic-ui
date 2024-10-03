import {Component} from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [
    TabViewModule,
    ReactiveFormsModule,
    CheckboxModule
  ],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})
export class SettingsPageComponent {
  formGroup: FormGroup = new FormGroup({});

}
