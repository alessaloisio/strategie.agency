const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // JS
  entry: "./src/js/index.js",
  mode: "production",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public/assets/js")
  },
  // SCSS
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader", // post process the compiled CSS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
};
