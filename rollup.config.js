export default {
    input: 'src/index.js',
    external: ['paper'],
    output: [
        {
            file: 'index.cjs',
            format: 'cjs',
            interop: 'defaultOnly'
        },
        {
            file: 'index.mjs',
            format: 'esm'
        }
    ]
}