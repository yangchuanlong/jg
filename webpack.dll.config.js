const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    mvc: ["react", "react-dom", "react-router-dom", "mobx-react", "mobx"],
    tool: ["axios", "lodash", "js-cookie"],
  },
  output: {
    path: path.join(__dirname, "dll"),
    filename: "vender_[name]_[fullhash].js",
    library: "[name]_[fullhash]",
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "dll", "[name]_manifest.json"),
      name: "[name]_[fullhash]",
    }),
  ],
};
