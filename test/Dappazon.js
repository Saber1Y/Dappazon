const { expect } = require("chai");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether');
}

describe("Dappazon", () => {
  let dappazon;
  let deployer;

  beforeEach(async () => {
    const Dappazon = await ethers.getContractFactory("Dappazon")
    dappazon = await Dappazon.deploy();

    [deployer] = await ethers.getSigners();
  });

  describe("Deployment", () => {
    it('Sets Deployment', async () => {
      expect(await dappazon.owner()).to.equal(deployer.address);
    })
  })

  describe("Listing", () => {
    let transaction;

    const ID = 1
    const NAME = "Shoes"
    const CATEGORY = "Clothing"
    const IMAGE = "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/shoes.jpg"
    const COST = tokens(1)
    const RATING = 4
    const STOCK = 5

    beforeEach(async () => {
      transaction = await dappazon.connect(deployer).ListProduct(ID, NAME, IMAGE, CATEGORY, COST, RATING, STOCK)
      await transaction.wait();
    });

    it('Returns Item Attribute', async () => {
      const item = await dappazon.items(ID);
      expect(item.id).to.equal(ID);
    })
  })
});
