import paper from 'paper';

paper.setup();

/**
 * Convert evenodd paths to nonzero paths in SVG.
 * @param {string} svgBuffer - SVG contents.
 */
const reorient = (svgBuffer) => {
    let result = svgBuffer;
    // regexp to find path in svg
    const pathRegex = /<path.*?d="([^"]+)"/g;
    const matches = [...svgBuffer.matchAll(pathRegex)];
    for (const match of matches) {
        const originalPath = match[1];
        const compoundPath = new paper.CompoundPath(originalPath);
        const newPath = compoundPath.reorient().pathData;
        result = result.replace(originalPath, newPath);
    }
    return result;
};

export { reorient };
