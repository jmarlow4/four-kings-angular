import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { InitAppState, initAppReducer } from '../state/init/init-app.reducer';
import { drawCardReducer, DrawCardState } from '../state/draw-card/draw-card.reducer';

export interface State {
  init: InitAppState;
  cards: DrawCardState;
}

export const reducers: ActionReducerMap<State> = {
  init: initAppReducer,
  cards: drawCardReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
