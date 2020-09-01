module.exports.cracklePop = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return `CracklePop`
  }

  if (number % 3 === 0) {
    return `Crackle`
  }

  if (number % 5 === 0) {
    return `Pop`
  }

  return number
}
