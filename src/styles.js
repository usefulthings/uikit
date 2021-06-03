import { css } from "@emotion/css"

const StyleSheet = {
  create: function (config) {
    return Object.entries(config).reduce((acc, [selector, styleBlock]) => {
      acc[selector] = css(styleBlock)
      return acc
    }, {})
  },
}

const Styles = { StyleSheet }

export { Styles, StyleSheet }
