import multiInput from "rollup-plugin-multi-input"

const config = [
  ["src", ""],
  ["test", "test"],
].map(([base, relative]) => ({
  input: [`${base}/**/*.js`],
  output: {
    dir: `dist`,
    preserveModules: true,
    sourcemap: true,
    format: "cjs",
    entryFileNames: "[name].cjs",
  },
  plugins: [multiInput({ relative })],
}))

export default config
