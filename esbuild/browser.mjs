import * as esbuild from 'esbuild';

let ctx = await esbuild.build({
  entryPoints: ['src/index.ts'],
  target: 'esnext',
  platform: 'browser',
  format: 'esm',
  bundle: true,
  minify: true,
  legalComments: 'none',
  outfile: 'dist/is.min.js',
  logLevel: 'info',
});
