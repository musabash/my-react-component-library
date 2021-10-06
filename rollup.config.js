import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import packageJson from './package.json';
import postcss from 'rollup-plugin-postcss'

export default {
  input: "src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    nodeResolve(),
    peerDepsExternal(),
    postcss({
      plugins: []
    }),
    babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled' 
        }),
    del({ targets: ['build/*'] })
  ],
  external: [
    "styled-components"
  ]
};