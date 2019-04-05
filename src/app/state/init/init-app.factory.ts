import { Store } from '@ngrx/store';
import { InitAppState } from './init-app.reducer';
import { Initialize } from './init-app.actions';

export function initAppFactory(store: Store<InitAppState>) {
  return () => store.dispatch(new Initialize());
}
