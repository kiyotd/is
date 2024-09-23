import * as esbuild from "esbuild";

let ctx = await esbuild.context({
  entryPoints: ["src/index.ts"],
  target: "esnext",
  platform: "browser",
  format: 'esm',
  bundle: true,
  minify: false,
  legalComments: "none",
  outfile: "dist/is.js",
  logLevel: "info"
});

await ctx.watch();
