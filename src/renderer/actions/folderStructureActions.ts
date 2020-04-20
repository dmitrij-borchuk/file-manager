import { Action, ActionCreator } from 'redux';

export const SET_FOLDER = 'SET_FOLDER';
export interface SetFolderAction extends Action {
  type: 'SET_FOLDER';
  payload: {
    panelId: string;
    items: string[];
  };
}
export const setFolder = (panelId: string, items: string[]): SetFolderAction => ({
  type: SET_FOLDER,
  payload: {
    panelId,
    items,
  },
});

export type FileStructureAction = SetFolderAction;
