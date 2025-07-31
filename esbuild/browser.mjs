import * as esbuild from 'esbuild';

// ESM形式のビルド（既存）
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

// IIFE形式のビルド（ブラウザ用）
await esbuild.build({
  entryPoints: ['src/index.ts'],
  target: 'es2015',
  platform: 'browser',
  format: 'iife',
  bundle: true,
  minify: true,
  legalComments: 'none',
  outfile: 'dist/is.umd.min.js',
  globalName: 'IsLibrary',
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  logLevel: 'info',
});
