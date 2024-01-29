const { expect } = require("chai");
const { describe } = require("node:test");
// const { beforeEach } = require("node:test");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether');
}

describe("Dappazon", () => {
  let dappazon;
  let buyer, deployer;

  beforeEach(async () => {
    const Dappazon = await ethers.getContractFactory("Dappazon")
    dappazon = await Dappazon.deploy();

    [deployer, buyer] = await ethers.getSigners();
  });

  // it('Sets Owner', async () => {
  //   const Contract = await dappazon.owner();
  //   expect(Contract).to.equal(deployer.address);
  // });
  describe("Deployment", () => {
    it('Sets Deployment', async () => {
      expect(await dappazon.owner()).to.equal(deployer.address);
    })
  })

  describe("Listing", () => {
    let transaction

    const ID = 1
    const NAME = "Shoes"
    const CATEGORY = "Clothing"
    const IMAGE = "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/shoes.jpg"
    const COST = tokens(1)
    const RATING = 4
    const STOCK = 5


    beforeEach(async () => {
      transaction = await dappazon.connect(deployer).list(1, 'Shoes', "IMAGE", 1, 4, 5)

      await transaction.wait();
    });

    it('Returns Item Attribute', async () => {
      const item = await dappazon.items(1);
      expect(item.id).to.equal(1);
    })

  })


});
