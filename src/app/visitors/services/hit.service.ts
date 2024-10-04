import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {RequestResult} from "../../shared/interfaces/request";
import {Hit} from "../interfaces/hit";

@Injectable({
  providedIn: 'root'
})
export class HitService {
  private serverUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }


  findAll(
    skip = 0,
    limit = 1000,
    returnTotalCount: boolean
  ): Observable<RequestResult<Hit[]>> {
    return this.http.get<RequestResult<Hit[]>>(`${this.serverUrl}/v1/hit/findAll?skip=${skip}&limit=${limit}`)
  }
}
