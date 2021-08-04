const path = require("path");
const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
  entry: ["react-hot-loader/patch", `${SRC_DIR}/index`],
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  devServer: {
    contentBase: "./dist",
  },
};
