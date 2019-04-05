import { DrawCardActions, DrawCardActionTypes } from './draw-card.actions';


export interface DrawCardState {
  allCards: any[];
}

export const initialState: DrawCardState = {
  allCards: []
};

export function drawCardReducer(
  state = initialState,
  action: DrawCardActions
): DrawCardState {
  switch (action.type) {

    case DrawCardActionTypes.DrawComplete:
      return {
        allCards: [
          ...state.allCards,
          ...action.payload
        ]
      };

    default:
      return state;
  }
}
