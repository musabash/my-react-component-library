import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import packageJson from './package.json';

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
    peerDepsExternal(),
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