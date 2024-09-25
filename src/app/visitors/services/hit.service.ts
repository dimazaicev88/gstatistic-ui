import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hit} from "../intefaces/hit";

@Injectable({
  providedIn: 'root'
})
export class HitService {

  constructor(private http: HttpClient) {
  }

  find(filter: Filter): Observable<Hit[]> {
    return this.http.post<Hit[]>('/api/v1/hit/filter', filter);
  }

}
