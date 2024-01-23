const { expect } = require("chai");




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



it("Dappazon", async () => {
  const Dappazon = await ethers.getContractFatory('Dappazon');
  const dappazon = await Dappazon.deploy();

  expect(dappazon.name()).to.equal("Dappazon");

})
