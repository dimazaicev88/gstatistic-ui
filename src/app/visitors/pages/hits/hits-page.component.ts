import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {ButtonDirective} from "primeng/button";
import {TableModule, TablePageEvent, TableRowSelectEvent} from "primeng/table";
import {HitService} from "../../services/hit.service";
import {RequestResult} from "../../../shared/interfaces/request";
import {Hit} from "../../interfaces/hit";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-hits-page',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    ButtonDirective,
    TableModule,
    ToastModule
  ],
  templateUrl: './hits-page.component.html',
  styleUrl: './hits-page.component.css',
  providers: [MessageService]
})
export class HitsPageComponent implements OnInit {
  hits: Hit[] = [];
  rowsPerPage = 7;
  totalRecords = 0;
  isLoading = false;
  private $tablePageEvent: TablePageEvent | undefined;
  selectedHit: Hit | undefined;

  constructor(
    private hitService: HitService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.loadEntities()
  }


  onPageChange($event: TablePageEvent) {
    this.$tablePageEvent = $event
  }

  get paginationSkip(): number {
    return (this.$tablePageEvent && this.$tablePageEvent.first) || 0
  }

  get paginationLimit(): number {
    return (this.$tablePageEvent && this.$tablePageEvent.rows) || this.rowsPerPage
  }

  private loadEntities() {
    this.hitService.findAll(this.paginationSkip, this.paginationLimit, true)
      .subscribe({
        next: (data: RequestResult<Hit[]>) => {
          this.isLoading = false
          this.totalRecords = data.Total != undefined ? data.Total : 0
          this.hits = data.Result || []
          if (data.Error) {
            console.error(data.Error)
            // this.msgService.showMsgError(new Error(data.Error))
            this.messageService.add(
              {
                severity: 'error',
                summary: data.Error,
                detail: data.Error,
                life: 3000
              }
            );
          }
        }, error: (err: Error) => {
          this.isLoading = false
          this.messageService.add(
            {
              severity: 'error',
              summary: err.name,
              detail: err.message,
              life: 3000
            }
          );
        },
      })
  }

  onRowSelect($event: TableRowSelectEvent) {
    alert(1)
  }
}

