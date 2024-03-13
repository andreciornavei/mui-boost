import typescript from "@rollup/plugin-typescript";
const devMode = process.env.NODE_ENV === "development";
console.log(`${devMode ? "development" : "production"} mode bundle`);

const config = [
  {
    input: "./src/lib.ts",
    output: {
      dir: "dist",
      format: "es",
      sourcemap: devMode ? "inline" : false,
    },
    plugins: [typescript({ target: "es6" })],
  },
];

export default config;
