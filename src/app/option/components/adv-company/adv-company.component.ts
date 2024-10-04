import {Component, OnInit} from '@angular/core';
import {Button, ButtonDirective} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {OptionService} from "../../services/option.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-adv-company',
  standalone: true,
  imports: [
    ButtonDirective,
    CheckboxModule,
    InputTextModule,
    PaginatorModule,
    Button
  ],
  templateUrl: './adv-company.component.html',
  styleUrl: './adv-company.component.css'
})
export class AdvCompanyComponent implements OnInit {
  advNa = false;
  advAutoCreate = false;
  refererCheck = false;
  searcherEvents = false;
  referer1Syn = "";
  referer2Syn = "";
  referer3Syn = "";

  constructor(
    private optionService: OptionService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.optionService.getOptions().subscribe({
      next: (options) => {
        this.advNa = (options.advCompany?.advNa && options.advCompany?.advNa) || false
        this.advAutoCreate = (options.advCompany?.advAutoCreate && options.advCompany?.advAutoCreate) || false
        this.refererCheck = (options.advCompany?.refererCheck && options.advCompany?.refererCheck) || false
        this.searcherEvents = (options.advCompany?.searcherEvents && options.advCompany?.searcherEvents) || false
        this.referer1Syn = options.advCompany?.referer1Syn || ''
        this.referer2Syn = options.advCompany?.referer2Syn || ''
        this.referer3Syn = options.advCompany?.referer3Syn || ''
      }, error: (err: any) => {
        console.error(err)
      }
    })
  }


  save() {
    this.optionService.setOptions({
      advCompany: {
        advNa: this.advNa,
        advAutoCreate: this.advAutoCreate,
        refererCheck: this.refererCheck,
        searcherEvents: this.searcherEvents,
        referer1Syn: this.referer1Syn,
        referer2Syn: this.referer2Syn,
        referer3Syn: this.referer3Syn,
      }
    }).subscribe({
      next: () => {
        this.messageService.add(
          {
            severity: 'success',
            summary: 'Success',
            detail: "Success set",
            life: 1500
          }
        );
      },
      error: (err: any) => {
        console.error(err)
      }
    });
  }
}
