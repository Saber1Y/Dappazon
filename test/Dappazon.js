const { expect } = require("chai");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether');
}

const ID = 1
const NAME = "Shoes"
const CATEGORY = "Clothing"
const IMAGE = "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/shoes.jpg"
const COST = tokens(1)
const RATING = 4
const STOCK = 5

describe("Dappazon", () => {
  let dappazon
  let deployer, buyer

  beforeEach(async () => {
    
    [deployer, buyer] = await ethers.getSigners()

   
    const Dappazon = await ethers.getContractFactory("Dappazon")
    dappazon = await Dappazon.deploy()
  })

  describe("Deployment", () => {
    it("Sets the owner", async () => {
      expect(await dappazon.owner()).to.equal(deployer.address)
    })
  })


  describe("Listing", () => {
    let transaction;

    beforeEach(async () => {
      transaction = await dappazon.connect(deployer).ListProduct(ID, NAME, IMAGE, CATEGORY, COST, RATING, STOCK)
      await transaction.wait();

    });

    it('Returns Item Attribute', async () => {
      const item = await dappazon.items(ID);

      expect(item.id).to.equal(ID);
      expect(item.name).to.equal(NAME);
      expect(item.category).to.equal(CATEGORY);
      expect(item.image).to.equal(IMAGE);
      expect(item.cost).to.equal(COST);
      expect(item.rating).to.equal(RATING);
      expect(item.stock).to.equal(STOCK);
    })

    it('Returns List emit', async () => {
      expect(transaction).to.emit(dappazon, "List");
    })
  })


  describe("Listing", () => {
    let transaction;

    beforeEach(async () => {
      transaction = await dappazon.connect(deployer).ListProduct(ID, NAME, IMAGE, CATEGORY, COST, RATING, STOCK)
      await transaction.wait();

      transaction = await dappazon.connect(buyer).BuyProduct(ID, { value: COST })
    });

    it("Updates the contract Balance", async () => {
      const result = await ethers.provider.getBalance(dappazon.address);
      // console.log(result)
      expect(result).to.equal(COST);
    })

    it('updates buyer"s order count', async () => {
      const result = await dappazon.orderCount(buyer.address)
      expect(result).to.equal(1);
    })

  })


});
