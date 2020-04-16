import { combineReducers } from 'redux';

import { CounterState, counterReducer } from './counterReducer';
import { IFolderStructureState, folderStructureReducer } from './folderStructureReducer';

export interface RootState {
  counter: CounterState;
  folderStructure: IFolderStructureState;
}

export const rootReducer = combineReducers<RootState | undefined>({
  counter: counterReducer,
  folderStructure: folderStructureReducer,
});
