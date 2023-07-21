import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
// import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
// import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';

const config = {
  input: './src/packages/index.ts',
  onwarn: (warning, warn) => {
    // MUI icons send tons of warnings related to 'use client'
    if (
      warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
      warning.message.includes(`'use client'`)
    ) {
      return;
    }
    warn(warning);
  },

  output: [
    {
      dir: 'lib/cjs',
      format: 'cjs',
      sourcemap: false,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src/packages/externals',
    },
    {
      dir: 'lib/esm',
      format: 'esm',
      sourcemap: false,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src/packages/externals',
    },
  ],
  plugins: [
    peerDepsExternal(),
    commonjs(),
    // named svg import (cra-like)
    url(),
    // svg support
    svgr({ icon: true }),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
    }),
    json(),
    // image(),
  ],
};

export default config;
