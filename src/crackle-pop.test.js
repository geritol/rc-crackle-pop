const { expect } = require("chai")
const { cracklePop } = require("./crackle-pop")

describe("crackle-pop logic", () => {
  ;[
    { input: 1, output: 1 },
    { input: 2, output: 2 },
    { input: 3, output: "Crackle" },
    { input: 4, output: 4 },
    { input: 5, output: "Pop" },
    { input: 15, output: "CracklePop" },
  ].forEach(({ input, output }) => {
    it(`returns ${output} for ${input}`, () => {
      expect(cracklePop(input)).to.equal(output)
    })
  })
})
