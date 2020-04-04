import fs from 'fs';

interface Options {
  enconding: string;
  flag: string;
}

function fileExists(filename: string): boolean {
  try {
    fs.accessSync(filename);
    return true;
  } catch (e) {
    return false;
  }
}

function readDir(path: string): string[] | Buffer[] | fs.Dirent[] {
  return fs.readdirSync(path);
}

function readFile(path: string, options: Options): string | Buffer {
  return fs.readFileSync(path, options);
}

function readLines(path: string, options: Options): string[] {
  return fs
    .readFileSync(path, options)
    .toString()
    .split('\n');
}

function writeFile(file: string | Buffer | URL | number, content: string | Buffer): boolean {
  try {
    fs.writeFileSync(file, content, 'utf8');
    return true;
  } catch (e) {
    throw new Error(e);
  }
}

export { fileExists, readDir, readFile, readLines, writeFile };
