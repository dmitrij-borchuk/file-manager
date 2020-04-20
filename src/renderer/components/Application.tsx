import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFolder } from '../actions/counterActions';
import { FolderViewer } from './folderViewer/FolderViewer';
import { RootState } from '../reducers';
import { readDir } from '../../fileSystem';

const fileListSelector = (panelName: string) => (state: RootState) =>
  state.folderStructure.panels[panelName].list;
const folderPathSelector = (panelName: string) => (state: RootState) =>
  state.folderStructure.panels[panelName].path;

const Application = () => {
  const dispatch = useDispatch();
  const panelName = 'default';
  const list = useSelector(fileListSelector(panelName));
  const path = useSelector(folderPathSelector(panelName));

  useEffect(() => {
    (async () => {
      const folder = await readDir(path);
      dispatch(setFolder(panelName, folder));
    })();
  }, [path]);

  return <FolderViewer list={list} className="h-screen" />;
};

export default hot(Application);
