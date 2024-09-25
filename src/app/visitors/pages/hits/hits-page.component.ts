import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {ButtonDirective} from "primeng/button";

@Component({
  selector: 'app-hits-page',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    ButtonDirective
  ],
  templateUrl: './hits-page.component.html',
  styleUrl: './hits-page.component.css'
})
export class HitsPageComponent {
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
