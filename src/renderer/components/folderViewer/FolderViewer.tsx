import * as React from 'react';
import cn from 'classnames';
import { listItem, folderViewer } from './styles.css';

export interface Props {
  list: string[];
  className?: string;
}

export const FolderViewer: React.FC<Props> = ({ list, className }) => {
  return (
    <div className={cn(className, folderViewer, 'p-4 ddd ddd2')}>
      {list.map(item => (
        <div key={item} className={cn(listItem, 'h-12')}>
          {item}
        </div>
      ))}
    </div>
  );
};
