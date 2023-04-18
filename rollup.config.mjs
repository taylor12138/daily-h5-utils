import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-minification";
import typescript from "rollup-plugin-typescript";
const path = require("path");

export default {
  input: path.resolve(__dirname, "src/index.ts"),
  output: [
    {
      file: path.resolve(__dirname, "lib/bundle.cjs.js"),
      format: "cjs",
      plugins: [terser()],
    },
    {
      file: path.resolve(__dirname, "lib/bundle.esm.js"),
      format: "esm",
      plugins: [terser()],
    },
  ],
  plugins: [
    commonjs(),
    resolve(),
    getBabelOutputPlugin({
      presets: ["@babel/preset-env"],
    }),
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
    }),
  ],
};
