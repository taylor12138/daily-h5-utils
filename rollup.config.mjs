import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
const path = require("path");

export default {
  input: path.resolve(__dirname, "src/index.js"),
  output: [
    {
      file: path.resolve(__dirname, "lib/bundle.cjs.js"),
      format: "cjs",
    },
    {
      file: path.resolve(__dirname, "index.js"),
      format: "cjs",
    },
    {
      file: path.resolve(__dirname, "lib/bundle.esm.js"),
      format: "esm",
    },
  ],
  plugins: [
    commonjs(),
    resolve(),
    getBabelOutputPlugin({
      presets: ["@babel/preset-env"],
    }),
  ],
};
