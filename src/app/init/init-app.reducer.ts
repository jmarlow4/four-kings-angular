import { InitAppActions, InitAppActionTypes } from './init-app.actions';


export interface InitAppState {
  deckId: string;
}

export const initialState: InitAppState = {
  deckId: null
};

export function initAppReducer(
  state = initialState,
  action: InitAppActions
): InitAppState {
  switch (action.type) {

    case InitAppActionTypes.InitComplete:
      return {
        deckId: action.payload
      };

    default:
      return state;
  }
}
