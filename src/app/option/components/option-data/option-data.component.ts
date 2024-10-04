import {Component, OnInit} from '@angular/core';
import {Button, ButtonDirective} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {PaginatorModule} from "primeng/paginator";
import {OptionService} from "../../services/option.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-option-data',
  standalone: true,
  imports: [
    ButtonDirective,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    PaginatorModule,
    Button
  ],
  templateUrl: './option-data.component.html',
  styleUrl: './option-data.component.css'
})
export class OptionDataComponent implements OnInit {
  saveVisits = false;
  savePathData = false;
  maxPathSteps = 0;
  importantPageParams = "";
  browsers = "";
  encodeEventGID = false;
  siteGroupID = "";
  saveReferrers = false;
  refererTop = false;
  saveHits = false;
  directoryIndex = ""

  constructor(private optionService: OptionService,
              private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.optionService.getOptions().subscribe({
      next: (options) => {
        this.saveVisits = (options.settingsData?.saveVisits && options.settingsData?.saveVisits) || false
        this.savePathData = (options.settingsData?.savePathData && options.settingsData?.savePathData) || false
        this.maxPathSteps = options.settingsData?.maxPathSteps || 0
        this.importantPageParams = options.settingsData?.importantPageParams || ''
        this.browsers = options.settingsData?.browsers || ''
        this.encodeEventGID = (options.settingsData?.savePathData && options.settingsData?.savePathData) || false
        this.siteGroupID = "";
        this.saveReferrers = (options.settingsData?.saveReferrers && options.settingsData?.saveReferrers) || false
        this.refererTop = (options.settingsData?.refererTop && options.settingsData?.refererTop) || false
        this.saveHits = (options.settingsData?.saveHits && options.settingsData?.saveHits) || false
        this.directoryIndex = ""
      }
    })
  }


  save() {
    this.optionService.setOptions({
      settingsData: {
        saveVisits: this.saveVisits,
        savePathData: this.savePathData,
        maxPathSteps: this.maxPathSteps,
        importantPageParams: this.importantPageParams,
        browsers: this.browsers,
        // encodeEventGID: this.encodeEventGID,
        // siteGroupID: this.siteGroupID,
        saveReferrers: this.saveReferrers,
        refererTop: this.refererTop,
        saveHits: this.saveHits,
        directoryIndex: this.directoryIndex,
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

  getOptions(): void {
  }

  change() {
    console.log(this.saveVisits);
  }
}
