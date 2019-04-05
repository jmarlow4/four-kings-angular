import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { InitAppActionTypes, InitComplete } from './init-app.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { InitAppState } from './init-app.reducer';
import { Store } from '@ngrx/store';
import { DeckService } from '../../services/deck.service';

export interface DeckApiResponse {
  remaining: number;
  cards: string[];
  deck_id: string;
  success: boolean;
}

@Injectable()
export class AppEffects {

  @Effect()
  initApp$ = this.actions$
    .pipe(
      ofType(InitAppActionTypes.Initialize),
      mergeMap(() => this.deckService.initDeck()
        .pipe(
          map((res: DeckApiResponse) => new InitComplete(res.deck_id),
          catchError((err) => err)
        ))
      )
    );


  constructor(
    private actions$: Actions,
    private deckService: DeckService,
    private store: Store<InitAppState>
  ) {}

}
