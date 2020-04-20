import { CounterAction } from './counterActions';
import { FileStructureAction } from './folderStructureActions';

export type RootActions = CounterAction | FileStructureAction;
