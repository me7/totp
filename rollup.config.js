import { terser } from "rollup-plugin-terser";
import typscript from "rollup-plugin-typescript";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.ts",
  output: [
    { file: "dist/bundle.js", format: "iife", name: "TOTP" },
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.mjs", format: "es" }
  ],
  plugins: [typscript(), production && terser()]
};
