import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AdvAdd} from "../interfaces/adv";

@Injectable({
  providedIn: 'root'
})
export class AdvService {

  constructor(private http: HttpClient) {
  }

  add(advData: AdvAdd) {
    this.http.post('/api/v1/adv/add', advData)
  }

  delete(advUuid: string) {
    this.http.delete(`/api/v1/adv/delete/${advUuid}`)
  }

  update(advData: AdvAdd) {
    this.http.patch(`/api/v1/adv/update/`, advData)
  }

}
