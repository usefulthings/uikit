import del from "rollup-plugin-delete"

import pkg from "./package.json"

const outputConfig = {
  umd: {
    format: `umd`,
    name: `UIKit`,
    globals: {
      "@emotion/css": `emotion`, // SEE: https://github.com/emotion-js/emotion/blob/main/packages/css/package.json
    },
  },
  esm: { format: `esm` },
}

export default {
  input: `src/index.js`,
  output: [
    { ...outputConfig.umd, file: `dist/index.js` },
    { ...outputConfig.esm, file: `dist/index.module.js` },
  ],
  external: Object.keys(pkg.peerDependencies || {}),
  plugins: [del({ targets: "dist/*" })],
}
