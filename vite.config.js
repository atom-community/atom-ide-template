import { defineConfig } from "vite"

import { createPlugins } from "rollup-plugin-atomic"
const plugins = createPlugins(["ts", "js"])

import builtinModules from "builtin-modules"
import commonjsExternals from "vite-plugin-commonjs-externals"
import escapeRegExp from "lodash/escapeRegExp"

import pkg from "./package.json"

export default defineConfig({
  plugins: [
    commonjsExternals({
      externals: [
        /^atom(\/.+)?$/,
        /^electron(\/.+)?$/,
        ...builtinModules,
        ...(process.env.NODE_ENV === "production"
          ? Object.keys(pkg.dependencies).map((dep) => new RegExp(`^${escapeRegExp(dep)}(\\/.+)?$`))
          : []),
      ],
    }),
  ],
  build: {
    target: "chrome76",
    outDir: "./dist",
    lib: {
      entry: "./src/main.ts",
      formats: ["cjs"],
    },
    // rollupOptions: {
    //   plugins
    // },
    brotliSize: false
  },
})
