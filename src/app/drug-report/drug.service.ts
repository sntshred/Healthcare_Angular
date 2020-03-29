import {
  HttpClientModule,
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IDruginfo } from "./Druginfo";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class DrugService {
  // api/products/products.json'
  private drugUrl = "api/drugs/drugs.json";

  constructor(private http: HttpClient) {}

  getDrugInfo(): Observable<IDruginfo[]> {
    return this.http.get<IDruginfo[]>(this.drugUrl).pipe(
      tap(data => JSON.stringify(data)),
      catchError(this.catchErrorHandler)
    );
  }
  private catchErrorHandler(err: HttpErrorResponse) {
    return throwError(err);
  }
}
