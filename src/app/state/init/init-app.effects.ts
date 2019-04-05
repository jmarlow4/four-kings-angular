import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { InitAppActionTypes, InitComplete } from './init-app.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { DeckService } from '../../services/deck.service';
import { DeckApiResponse } from 'src/app/models/deck-api-response.interface';

@Injectable()
export class InitAppEffects {

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
    private deckService: DeckService
  ) {}

}
