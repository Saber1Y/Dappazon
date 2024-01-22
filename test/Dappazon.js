const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {

  it('Dappazon', async () => {
    const Dappazon = await ethers.getContractFactory("Dappazon")
    const dappazon = await Dappazon.deploy();
    expect(await dappazon.name()).to.equal("Dappazon");
  })

})
