import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getSatate(country: string): Observable<any> {
    const url = `https://coronavirus-19-api.herokuapp.com/countries/${country}`;

    return this.http.get(url);
  }
}
