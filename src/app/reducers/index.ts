import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { InitAppState, initAppReducer } from '../init/init-app.reducer';

export interface State {
  init: InitAppState;
}

export const reducers: ActionReducerMap<State> = {
  init: initAppReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
