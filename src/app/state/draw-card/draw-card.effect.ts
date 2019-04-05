import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { DeckService } from '../../services/deck.service';
import { DrawCardActionTypes, DrawComplete } from './draw-card.actions';
import { DrawCardState } from './draw-card.reducer';
import { DeckApiResponse } from 'src/app/models/deck-api-response.interface';

@Injectable()
export class DrawCardEffects {

  @Effect()
  drawCard$ = this.actions$
    .pipe(
      ofType(DrawCardActionTypes.Draw),
      mergeMap(() => this.deckService.initDeck()
        .pipe(
          map((res: DeckApiResponse) => new DrawComplete(res.cards),
          catchError((err) => err)
        ))
      )
    );


  constructor(
    private actions$: Actions,
    private deckService: DeckService,
    private store: Store<DrawCardState>
  ) {}

}
