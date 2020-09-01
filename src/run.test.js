const { expect, sinon } = require("./test-setup")
const logic = require("./crackle-pop")

describe("print crackle-pop", function () {
  before(() => {
    this.cracklePopStub = sinon.stub(logic, "cracklePop")
    this.consoleLogStub = sinon.stub(console, "log")
    this.run = require("./run")
  })
  afterEach(() => {
    sinon.reset()
  })
  after(() => {
    sinon.restore()
  })
  it("prints the result of cracklePop", () => {
    const result = "CracklePop test"
    this.cracklePopStub.returns(result)

    this.run()

    expect(this.consoleLogStub).to.have.been.calledWith(result)
  })

  it("calls cracklePop with numbers 1 to 100 inclusive", () => {
    this.run()

    expect(this.cracklePopStub).to.not.have.been.calledWith(0)
    for (let i = 1; i <= 100; i++) {
      expect(this.cracklePopStub).to.have.been.calledWith(i)
    }
    expect(this.cracklePopStub).to.not.have.been.calledWith(101)
  })
})
