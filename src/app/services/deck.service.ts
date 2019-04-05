import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private http: HttpClient) { }

  initDeck(): Observable<any> {
    return this.http.get(`${environment.api}/new/draw/`, {
      params: {
          count: '0'
        }
      });
  }

  drawCards(deckId, numCards) {
    return this.http.get(`${environment.api}/${deckId}/draw/`, {
      params: {
          count: numCards
        }
      });
  }
}
