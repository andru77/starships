import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) {}

  private static formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params?: any, reqOpts?: any): Observable<any> {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams(),
      };
    }
    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (params.hasOwnProperty(k)) {
          reqOpts.params.set(k, params[k]);
        }
      }
    }
    return this.http.get(`${environment.api_url}/${path}`,  { params })
      .pipe(catchError(ApiService.formatErrors));
  }

  put( path: string, body = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}/${path}`,
      body,
    ).pipe(catchError(ApiService.formatErrors));
  }

  post( path: string, body = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}/${path}`,
      body,
    ).pipe(catchError(ApiService.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
    ).pipe(catchError(ApiService.formatErrors));
  }
}
