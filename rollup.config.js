import { createPlugins } from "rollup-plugin-atomic"

const plugins = createPlugins([
  "js",
  ["ts", { tsconfig: "./src/tsconfig.json" }, true],
  "json",
  // "visutalizer"
])

const RollupConfig = [
  {
    input: "src/main.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
        sourcemap: process.env.NODE_ENV === "development" ? "inline" : true,
      },
    ],
    // loaded externally
    external: ["atom", "electron"],
    plugins,
  },
]
export default RollupConfig
