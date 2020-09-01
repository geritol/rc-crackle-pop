const { cracklePop } = require("./crackle-pop")

module.exports = () => {
  for (let number = 1; number <= 100; number++) {
    console.log(cracklePop(number))
  }
}
