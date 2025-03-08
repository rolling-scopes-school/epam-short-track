import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const readFileAsynchronously = async (pathToFile: string) => {
  const fullPath = join(__dirname, pathToFile);

  if (existsSync(fullPath)) {
    const fileContent = await readFile(fullPath);
    return fileContent.toString();
  }

  return null;
};

export const doStuffByTimeout = (callback: () => void, timeout: number) => {
  setTimeout(callback, timeout);
};

export const doStuffByInterval = (callback: () => void, interval: number) => {
  setInterval(callback, interval);
};
