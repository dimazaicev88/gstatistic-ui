import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Options} from "../../shared/interfaces/options";
import {RequestInfo} from "../../shared/interfaces/request";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  setOptions(settings: Options): Observable<RequestInfo> {
    return this.http.post<RequestInfo>(`${this.apiUrl}/api/v1/options/set`, settings)
  }

  getOptions() {
    return this.http.get<Options>(`${this.apiUrl}/api/v1/options/get`)
  }

}
