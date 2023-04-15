const path = require("path");
module.exports = {
  entry: path.join(__dirname, "src"),
  mode: "production",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    library: {
      name: "daily-h5-utils",
      type: "commonjs",
    },
  },
  module: {
    // 指定加载规则
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
