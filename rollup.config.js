import pkg from './package.json'

module.exports = {
    input: './src/com/cngr/bidirectionalmap/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      }
    ],
    plugins: []
}
