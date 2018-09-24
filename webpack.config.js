const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    signup: "./src/signup.js"
    // login: "./src/login.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  },
  devtool: "inline-source-map"
};
