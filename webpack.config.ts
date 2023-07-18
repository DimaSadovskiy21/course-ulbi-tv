import { Configuration } from "webpack";
import { resolve } from "path";

import { IBuildEnv, IBuildPaths } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: resolve(__dirname, "src", "index.tsx"),
    build: resolve(__dirname, "build"),
    html: resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
