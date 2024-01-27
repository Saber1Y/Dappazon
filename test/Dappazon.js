const { expect } = require("chai");
const { describe } = require("node:test");




const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {

  let dappazon;
  let buyer, deployer;

  beforeEach(async () => {
    const Dappazon = await ethers.getContractFactory("Dappazon")
    dappazon = await Dappazon.deploy();

    [deployer, buyer] = await ethers.getSigners();


    it('Sets Owner', async () => {
      const Contract = await dappazon.Owner();
      expect(Contract).to.equal(deployer.address);
    });
  })
});

describe('Listing', () => {
  beforeEach(async () => {
    transaction = await dappazon.connect(deploy).list(
      1,
      "Shoes",
      "IMAGE",
      "Clothing",
      5,
      1,
      4
    )

    await transaction.wait()


    it('Returns List', async () => {
      const item = await dappazon.items(1);
      expect(item.id).to.equal(item.id);
    });
  })
});

