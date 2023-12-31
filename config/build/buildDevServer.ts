import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevSever(options: BuildOptions): DevServerConfiguration {
  const { port } = options;
  return {
    port,
    open: true,
  };
}
