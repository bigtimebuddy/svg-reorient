# svg-reorient

Small utility that converts an SVG path data (e.g., `<path d="" />`)
to support nonzero fill-rule. Most modern tools use evenodd (like Figma)
but nonzero is used for fonts or Adobe After Effects. This provides
compatibility for those targets.

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA/CAAAAAAX9X85AAACQElEQVR4Ae3ZAYQUURzH8d8dXQhPcC4WDxakFQHyNgFVuwDhdgQgNguUvNVBYCJI4REnYB0guMkBigUgeiE54h5ZoewfgMY0u+3OPK63LzsT7wOYwXyN/8zfGFCNgKoXYkJMiAkx4yQzrkPMCLkRrepdE5nth74xCjlFq0o2kdnYnXjHCEoJnxjk7nz7T2PMUJTxWUxLlPU1LZl+3N+TJT3kLj6QRY9fvP9hjeGwymOsuKFF+lFzA24u7L61xSiwvizpzmK6sowhpkVvmnC2M7DF9NBxnZkeIlr0agPurttjImsMV6nWX8UorEC4xOTqEDNu8d909TElISbpci5UPWIiZO7XIWYICDXqpTU+Me17g1s73jEakJSSgFk5ZuvywfHJ0d0d3xgFThmOmHIjuezUGPaSUoe3fWMkxOxY/8/pZafGND5T6mTgGxOjRRkBOQ8Uy9YWkwAJpcZAsvLMsD1KHbR9Y0iAKWOGDMLjaTr/7MPx/rWz3jGaI8O1RwxYo7G9Be8YMn0OMGnqspu0prKwKJM4SsmE5lQ0N1przJAhx59aXnpyjTH6EoBWlBIAuK7yzmgOSJN3ybymqpnh4GPKZWncVBYzBDQt0AyyqhjDi9eOwUxFMQqMChjiKmLsH7l9dCqK4VBUoMAqikliTQUmTsJuctT5FzFtW0wMFis3xQF7fQ7Otm7aYgyHo9KqOLoKZ80nthjSPe4o0rTk5+GNM3CyeeX5d2uMv+nk6yft5stkGv6qhJgQE2JCTMV+AVgJN3gE2eegAAAAAElFTkSuQmCC" />

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

Optionally, you can define an `-o` or `--output` direction to save files.

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
