const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const moment = require("moment");
const os = require("os");
const { version } = require("./package.json");

const AMAP_KEY = "80fbad0ce2e644890c0aabfa891dfafd";

const devPlugins = [
  new ESLintPlugin({
    extensions: ["js", "jsx", "tsx", "ts"],
    fix: true,
    threads: 3,
    emitWarning: false,
    overrideConfigFile: path.join(__dirname, "./.eslintrc.js"),
  }),
];
let plugins = [
  ...(process.env.ENV === "loc" ? devPlugins : []),
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: [{ from: "dll", to: "dll" }],
  }),
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./src/index.html",
    favicon: "./src/images/favicon.png",
    templateParameters: {
      AMAP_KEY,
      DLL_SCRIPTS: fs
        .readdirSync("./dll")
        .filter((fileName) => fileName.endsWith(".js"))
        .map((fileName) => `<script src="./dll/${fileName}"></script>`)
        .join(""),
      BUILD_TIME: moment().format("YYYY-MM-DD HH:mm:ss"),
      VERSION: version,
    },
  }),
  new webpack.DefinePlugin({
    ENV: JSON.stringify(process.env.ENV),
  }),
  new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require("./dll/mvc_manifest.json"),
  }),
  new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require("./dll/tool_manifest.json"),
  }),
  new webpack.ProgressPlugin({
    modules: true,
    profile: true,
  }),
];

if (process.env.NODE_ENV === "production") {
  plugins = [...plugins];
}

const port = 9003;
module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    path: `${__dirname}/dist`,
    filename: "[name]-[contenthash:8].js",
    chunkFilename: "[name]-[contenthash:8].js",
  },
  cache: {
    type: "filesystem",
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              [
                "@babel/preset-typescript",
                { isTSX: true, allExtensions: true },
              ],
            ],
            plugins: [["import", { libraryName: "antd", style: true }, "antd"]],
          },
        },
        exclude: /(node_modules|dist)/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "local",
                localIdentName: "[local]_[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {},
          },
          {
            loader: "less-loader",
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(css|less)$/, // for antd
        include: /node_modules(\\|\/)antd/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "primary-color": "#1882F0FF",
                  "success-color": "#56D088FF",
                  "warning-color": "#FFBB11FF",
                  "error-color": "#F74E2AFF",
                  "disabled-color": "#00000040",
                  "border-radius-base": "4px",
                  "border-color-base": "#E7E9EFFF",
                  "input-placeholder-color": "#5E6C9373",
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
        include: /src/,
      },
    ],
  },
  plugins,
  optimization: {
    concatenateModules: false,
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            evaluate: false,
            expression: true,
            keep_infinity: true,
          },
          mangle: false,
          format: {
            keep_numbers: true,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, "src/pages"),
      components: path.join(__dirname, "src/components"),
      images: path.join(__dirname, "src/images"),
      styles: path.join(__dirname, "src/styles"),
      constants: path.join(__dirname, "src/constants"),
      router: path.join(__dirname, "src/router"),
      utils: path.join(__dirname, "src/utils"),
      service: path.join(__dirname, "src/service"),
      hooks: path.join(__dirname, "src/hooks"),
      store: path.join(__dirname, "src/store"),
      antd: path.join(__dirname, "node_modules/antd"),
      react: path.join(__dirname, "node_modules/react"),
      "react-router-dom": path.join(__dirname, "node_modules/react-router-dom"),
    },
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    symlinks: false,
  },
  snapshot: {
    immutablePaths: [],
    managedPaths: [],
  },
  devtool: {
    loc: "eval-cheap-module-source-map",
    dev: "eval-cheap-module-source-map",
    test: "eval-cheap-module-source-map",
    uat: "eval-cheap-module-source-map",
    prod: undefined,
  }[process.env.ENV],
  devServer: {
    compress: true,
    port,
    host: "0.0.0.0",
    open: {
      app: {
        name: os.platform().toLocaleLowerCase().includes("darwin")
          ? "Google Chrome"
          : "chrome",
      },
      target: [`http://localhost:${port}/`],
    },

    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: [
      {
        context: ["/auth", "/marketing-wireless"],
        // target: "https://yinweifuli-wireless-api-dev.eshiinfo.com/", // 走dev网关
        target: "https://yinweifuli-wireless-api-test.eshiinfo.com/", // 走test网关
        changeOrigin: true,
        headers: {
          // origin: "https://yinweifuli-wireless-api-dev.eshiinfo.com/", // dev
          origin: "https://yinweifuli-wireless-api-test.eshiinfo.com", // test
        },
      },
      {
        context: ["/api-docs"],
        target: "http://8.134.69.41:6999/user-web/yinweifuli-user-web/v3/",
        changeOrigin: true,
      },
    ],
    allowedHosts: "all",
  },
  watchOptions: {},
};
