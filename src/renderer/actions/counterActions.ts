import { Action, ActionCreator } from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface IncrementAction extends Action {
  type: 'INCREMENT';
}
export interface DecrementAction extends Action {
  type: 'DECREMENT';
}

export const increment: ActionCreator<IncrementAction> = () => ({
  type: INCREMENT,
});

export const decrement: ActionCreator<DecrementAction> = () => ({
  type: DECREMENT,
});

export const SET_FOLDER = 'SET_FOLDER';
export interface SetFolderAction extends Action {
  type: 'SET_FOLDER';
  payload: {
    panelId: string;
    items: string[];
  };
}
export const setFolder: ActionCreator<SetFolderAction> = (panelId: string, items: string[]) => ({
  type: SET_FOLDER,
  payload: {
    panelId,
    items,
  },
});

export type CounterAction = IncrementAction | DecrementAction | SetFolderAction;
