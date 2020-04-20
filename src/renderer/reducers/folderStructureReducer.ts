import { Reducer } from 'redux';

import { CounterAction } from '../actions/counterActions';
import { FileStructureAction, SET_FOLDER } from '../actions/folderStructureActions';
import { Dictionary } from '../../types/dictionary';

export interface IFolderStructurePanelState {
  readonly path: string;
  readonly list: string[];
}

export interface IFolderStructureState {
  readonly panels: Dictionary<IFolderStructurePanelState>;
}

const defaultState: IFolderStructureState = {
  panels: {
    default: {
      path: '/',
      list: [],
    },
  },
};

export const folderStructureReducer: Reducer<IFolderStructureState, FileStructureAction> = (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case SET_FOLDER:
      const currentPanel = state.panels[action.payload.panelId];
      return {
        ...state,
        panels: {
          ...state.panels,
          [action.payload.panelId]: {
            ...currentPanel,
            list: action.payload.items,
          },
        },
      };
    default:
      return state;
  }
};
