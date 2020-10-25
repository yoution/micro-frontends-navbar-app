/* global __dirname */

const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "topcoder",
    projectName: "micro-frontends-navbar-app",
    webpackConfigEnv,
  });

  // modify the webpack config however you'd like to by adding to this object
  return webpackMerge.smart(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve("file-loader", { paths: [__dirname] }),
          },
        },
      ],
    },
  });
};
