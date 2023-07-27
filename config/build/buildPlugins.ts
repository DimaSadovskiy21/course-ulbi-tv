import {
  WebpackPluginInstance,
  ProgressPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefrefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

import { IBuildOptions } from "./types/config";

export function buildPlugins({
  paths,
  isDev,
}: IBuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS__DEV__: JSON.stringify(isDev),
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefrefreshWebpackPlugin());
    plugins.push(new HotModuleReplacementPlugin());
  }

  return plugins;
}
