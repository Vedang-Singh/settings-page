import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/SettingsPageComponent/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true, // clean dist folder
  external: ["react", "react-dom"], // Do NOT bundle React
  injectStyle: true,
  tsconfig: "tsconfig.app.json",
});