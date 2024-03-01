import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "customdatatabledev",
  },
  external: [
    "react",
    "react-dom",
    "bootstrap",
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap/dist/js/bootstrap.bundle.min.js",
  ],
  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    postcss({
      extract: true,
      minimize: true,
    }),
  ],
});
