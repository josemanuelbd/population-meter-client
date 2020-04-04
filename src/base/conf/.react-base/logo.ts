import fs from 'fs';
import path from 'path';

const dir = path.resolve(__dirname, 'logo.txt');

console.log(fs.readFileSync(dir, 'utf-8'));
