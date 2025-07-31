import * as esbuild from 'esbuild';

// ESM形式のビルド（開発用）
let ctx = await esbuild.context({
  entryPoints: ['src/index.ts'],
  target: 'esnext',
  platform: 'browser',
  format: 'esm',
  bundle: true,
  minify: false,
  legalComments: 'none',
  outfile: 'dist/is.js',
  logLevel: 'info',
});

// UMD形式のビルド（開発用）
let ctxUmd = await esbuild.context({
  entryPoints: ['src/index.ts'],
  target: 'es2015',
  platform: 'browser',
  format: 'iife',
  bundle: true,
  minify: false,
  legalComments: 'none',
  outfile: 'dist/is.umd.js',
  logLevel: 'info',
});

await Promise.all([ctx.watch(), ctxUmd.watch()]);
