import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

export default {
  input: "./src/index.js",
  output: [
    {
      file: "lib/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "lib/bundle.esm.js",
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
