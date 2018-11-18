// rollup.config.js
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
  output: {
    file: "build/Chart.RadialGauge.js",
    name: "ChartRadialGauge",
    format: "umd",
    globals: {
      "chart.js": "Chart"
    }
  },
  external: ["chart.js"],
  plugins: [resolve(), commonjs(), babel()]
};