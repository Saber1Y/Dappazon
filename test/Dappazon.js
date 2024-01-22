const { expect } = require("chai");
// const { describe } = require("node:test");
// const { beforeEach } = require("node:test");


const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {

  let dappazon;

  beforeEach(async () => {
    const Dappazon = await ethers.getContractFactory("Dappazon")
    dappazon = await Dappazon.deploy();
  });

  describe("Deployment", () => {
    it('has a name', async () => {
      const name = await dappazon.name();
      expect(name).to.equal("Dappazon");
    });
  })


});
