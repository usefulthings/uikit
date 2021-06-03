const Tokens = {
  create: function (
    tokensConfig,
    { includeScale = false, scaleName = `scale` } = {},
  ) {
    return tokensConfig.reduce(
      (tokens, [token, ...aliases]) => {
        for (const alias of aliases) {
          if (includeScale && alias === scaleName)
            throw Error(
              `Unable to configure token "${token}": alias "${alias}" conflicts with scaleName "${scaleName}".`,
            )
          else tokens[alias] = token
        }
        if (includeScale) tokens[scaleName].push(token)
        return tokens
      },
      { ...(includeScale && { [scaleName]: [] }) },
    )
  },
}

export { Tokens }
