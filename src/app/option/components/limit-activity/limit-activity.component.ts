import {Component, OnInit} from '@angular/core';
import {InputNumberModule} from "primeng/inputnumber";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {OptionService} from "../../services/option.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-limit-activity',
  standalone: true,
  imports: [
    InputNumberModule,
    CheckboxModule,
    FormsModule,
    Button
  ],
  templateUrl: './limit-activity.component.html',
  styleUrl: './limit-activity.component.css'
})
export class LimitActivityComponent implements OnInit {
  defenceOn = false;
  defenceDelay = 0;
  defenceMaxStackHits = 0;
  defenceStackTime = 0;
  defenceLog = false;

  constructor(
    private optionService: OptionService,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    this.optionService.getOptions().subscribe({
      next: (options) => {
        this.defenceDelay = options.limitActivity?.defenceDelay || 0
        this.defenceMaxStackHits = options.limitActivity?.defenceMaxStackHits || 0
        this.defenceStackTime = options.limitActivity?.defenceStackTime || 0
        this.defenceLog = (options.limitActivity?.defenceLog && options.limitActivity?.defenceLog) || false
        this.defenceOn = (options.limitActivity?.defenceOn && options.limitActivity?.defenceOn) || false
      }
    })
  }

  save() {
    this.optionService.setOptions({
      limitActivity: {
        defenceDelay: this.defenceDelay,
        defenceStackTime: this.defenceStackTime,
        defenceMaxStackHits: this.defenceMaxStackHits,
        defenceOn: this.defenceOn,
        defenceLog: this.defenceLog
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
      }
    });
  }
}
