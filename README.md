# svg-reorient

Small utility that converts an SVG path data (e.g., `<path d="" />`)
to support nonzero fill-rule. Most modern tools use evenodd (like Figma)
but nonzero is used for fonts or Adobe After Effects. This provides
compatibility for those targets.

## Installation

```
npm install svg-reorient
```

## CLI Usage

Globs and multiple files are supported, this will overwrite the file
with updated paths.

```
reorient path/to/*.svg
```

Optionally, you can define an `-o` or `--output` directory to save files without overwriting.

```
reorient *.svg -o dist
```

## Module Usage

This module exports a single function `reorient` which accepts
an SVG string as the first argument and return an updated SVG string.

```js
import { reorient } from 'svg-reorient';

const updatedBuffer = reorient('<svg></svg>');
```
