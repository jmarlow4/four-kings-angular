import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Store } from '@ngrx/store';
import { InitAppState } from './init-app.reducer';
import { Initialize } from './init-app.actions';
import { Observable } from 'rxjs';

@Injectable()
export class AppInitService {

  constructor(private http: HttpClient) { }

  initializeApp(): Observable<any> {
    return this.http.get(`${environment.api}/new/draw/`, {
      params: {
          count: '0'
        }
      })
  }

}

export function initAppFactory(store: Store<InitAppState>) {
  return () => store.dispatch(new Initialize());
}
