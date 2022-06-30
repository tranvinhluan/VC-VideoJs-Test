const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  console.log(env.mode);
  return {
    mode: "development",
    entry: {
      index: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "./build"),
      filename: "bundle.js",
      // clean: true,
      assetModuleFilename: "[name][ext]",
    },
    // devtool: "inline-source-map",
    devServer: {
      static: {
        directory: path.resolve(__dirname, "build"),
      },
      port: 9000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            env?.mode === "pro" ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.(?:ico|svg|gif|png|jpg|jpeg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            env?.mode === "pro" ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
      new HtmlWebpackPlugin({
        title: "Webpack App",
        filename: "index.html",
        template: path.resolve(__dirname, "./src/template.html"), // giúp webpack tự động tạo 1 hay nhiều file html và liên kết các module sau khi build, tối ưu và sử dụng các biến môi trường trong file html đầu ra.
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
    ],
  };
};

// Loader chỉ được sử dụng để thực hiện các chuyển dạng cho các file cần xử lý.
// plugin thực hiện các hành động hoặc các chức năng của người dùng trên các compilation hoặc chunk.
