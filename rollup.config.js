const tsPlugin = require('@rollup/plugin-typescript');
const nodeResolve = require('@rollup/plugin-node-resolve');

const rollupConfig = {
       input: 'src/index.ts',
       output: {
              dir: 'dist',
              format: 'cjs',
              compact: true
       },
       plugins: [
              nodeResolve(),
              tsPlugin()
       ],
       external: [
              "tailwindcss/plugin"
       ]
};

module.exports = rollupConfig;