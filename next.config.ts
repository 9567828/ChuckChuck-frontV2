import type { NextConfig } from "next";
import path from "path";

const sassOptions = {
  // includePaths: [path.join(__dirname, "styles")],
  additionalData: `@use "./styles/abastract/index.scss" as *;`,
};

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
