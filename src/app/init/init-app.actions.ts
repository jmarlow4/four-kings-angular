import { Action } from '@ngrx/store';

export enum InitAppActionTypes {
  Initialize = '[InitApp] Initialize',
  InitComplete = '[InitApp] InitComplete'
}

export class Initialize implements Action {
  readonly type = InitAppActionTypes.Initialize;
}
export class InitComplete implements Action {
  readonly type = InitAppActionTypes.InitComplete;
  constructor(public payload: string) {}
}

export type InitAppActions = Initialize | InitComplete;
