import { readdir } from 'fs';
import { promisify } from 'util';

const readdirP = promisify(readdir);

export const readDir = (path: string) => readdirP(path);
