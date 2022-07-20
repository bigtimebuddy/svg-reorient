#!/usr/bin/env node

import minimist from 'minimist';
import path from 'path';
import {promises} from 'fs';
import {globby} from 'globby';
import {reorient} from './index.mjs';

const { _: files, output } = minimist(process.argv.slice(2), {
    string: ['output'],
    alias: { output: 'o' },
});

const svgFiles = (await Promise.all(files.map(file => globby(file))))
    .flat()
    .filter(file => path.extname(file) === '.svg')
    .map(file => path.resolve(process.cwd(), file));

if (!svgFiles.length) {
    console.log('Error: No svg files specified\n');
    process.exit(1);
}

await Promise.all(svgFiles.map(async (file) => {
    const svgBuffer = await promises.readFile(file, 'utf8');
    const result = reorient(svgBuffer);
    let outFile = file;
    if (output) {
        const { name } = path.parse(file);
        outFile = path.resolve(process.cwd(), output) + `/${name}.svg`;
    }
    await promises.writeFile(outFile, result, 'utf8');
}));
