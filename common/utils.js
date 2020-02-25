function defaultEquals(a, b) {
  return a === b
}

function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDIFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

module.exports = {
  defaultEquals,
  defaultToString
}