import { Action } from '@ngrx/store';

export enum DrawCardActionTypes {
  Draw = '[DrawCard] Draw',
  DrawComplete = '[DrawCard] DrawComplete'
}

export class Draw implements Action {
  readonly type = DrawCardActionTypes.Draw;
}
export class DrawComplete implements Action {
  readonly type = DrawCardActionTypes.DrawComplete;
  constructor(public payload: any[]) {}
}

export type DrawCardActions = Draw | DrawComplete;
