import { Reducer } from 'redux';

import { DECREMENT, INCREMENT, CounterAction, SET_FOLDER } from '../actions/counterActions';
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

export const folderStructureReducer: Reducer<IFolderStructureState> = (
  state = defaultState,
  action: CounterAction,
) => {
  switch (action.type) {
    // case INCREMENT:
    //   return {
    //     ...state,
    //     value: state.value + 1,
    //   };
    // case DECREMENT:
    //   return {
    //     ...state,
    //     value: state.value - 1,
    //   };
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
