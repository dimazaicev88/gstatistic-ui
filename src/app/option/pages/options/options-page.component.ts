import {Component} from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {Button, ButtonDirective} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {MultiSelectModule} from "primeng/multiselect";
import {InputTextareaModule} from "primeng/inputtextarea";
import {NgIf} from "@angular/common";
import {AdvCompanyComponent} from "../../components/adv-company/adv-company.component";
import {OptionDataComponent} from "../../components/option-data/option-data.component";

@Component({
  selector: 'app-options-page',
  standalone: true,
  imports: [
    TabViewModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    Button,
    DropdownModule,
    ButtonDirective,
    RadioButtonModule,
    MultiSelectModule,
    InputTextareaModule,
    NgIf,
    AdvCompanyComponent,
    OptionDataComponent
  ],
  templateUrl: './options-page.component.html',
  styleUrl: './options-page.component.css'
})
export class OptionsPageComponent {

  searchPhrasesDays = 0;
  searchPhrasesCount = 0;
  pageHistoryDays = 0;
  pageHistoryCount = 0;
  pathDynamicsDays = 0;
  pathDynamicsCount = 0;
  referringPagesDays = 0;
  referringPagesCount = 0;
  referringDomainsDays = 0;
  referringDomainsCount = 0;

  save() {

  }

  resetToDefault() {

  }

  clearData(pageHistory: string) {

  }
}
