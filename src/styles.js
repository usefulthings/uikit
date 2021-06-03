import { css, injectGlobal } from "@emotion/css"

const StyleSheet = {
  create: function (config) {
    return Object.entries(config).reduce((acc, [selector, styleBlock]) => {
      acc[selector] = css(styleBlock)
      return acc
    }, {})
  },
}

const Styles = { css, injectGlobal, StyleSheet }

export { Styles, css, injectGlobal, StyleSheet }
