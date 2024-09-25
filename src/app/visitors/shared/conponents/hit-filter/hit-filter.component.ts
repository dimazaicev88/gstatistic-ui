import { Component } from '@angular/core';
import {ButtonDirective} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-hit-filter',
  standalone: true,
  imports: [
    ButtonDirective,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './hit-filter.component.html',
  styleUrl: './hit-filter.component.css'
})
export class HitFilterComponent {
  filterData = {
    userId: '',
    hitId: '',
    sessionId: '',
    date: null,
    visitorId: '',
    registered: null,
    blacklist: null,
    logic: 'and'
  };

  dateOptions = [
    {label: 'Месяц', value: 'month'},
    {label: 'Неделя', value: 'week'},
    {label: 'День', value: 'day'}
  ];

  registrationOptions = [
    {label: '(все)', value: null},
    {label: 'Да', value: true},
    {label: 'Нет', value: false}
  ];

  blacklistOptions = [
    {label: '(все)', value: null},
    {label: 'Да', value: true},
    {label: 'Нет', value: false}
  ];
}
