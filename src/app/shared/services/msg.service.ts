import {Injectable} from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(
    private messageService: MessageService
  ) {
  }

  showMsgError(err: Error) {
    console.error(err)
    this.messageService.add(
      {
        severity: 'error',
        summary: err.name,
        detail: err.message,
        life: 3000
      }
    );
  }

  showMsgSuccess(msg: string) {
    this.messageService.add(
      {
        severity: 'success',
        summary: 'Success',
        detail: msg,
        life: 1500
      }
    );
  }
}
