const { expect } = require("chai");

const NAME = "TokenMaster";
const SYMBOL = "TM";

const OCCASION_NAME = "ETH Texas";
const OCCASION_COST = ethers.utils.parseUnits("1", "ether");
const OCCASION_MAX_TICKETS = 100;
const OCCASION_DATE = "Apr 27";
const OCCASION_TIME = "10:00AM CST";
const OCCASION_LOCATION = "Austin, Texas";

describe("TokenMaster", () => {
  let tokenMaster;
  let deployer, buyer;

  beforeEach(async () => {
    // Setup accounts
    [deployer, buyer] = await ethers.getSigners();

    const TokenMaster = await ethers.getContractFactory("TokenMaster");
    tokenMaster = await TokenMaster.deploy(NAME, SYMBOL);

    await tokenMaster.connect(deployer).list();
  });

  describe("Deployment", () => {
    it("Sets the name", async () => {
      expect(await tokenMaster.name()).to.equal(NAME);
    });

    it("Sets the symbol", async () => {
      expect(await tokenMaster.symbol()).to.equal(SYMBOL);
    });

    it("Sets the owner", async () => {
      expect(await tokenMaster.owner()).to.equal(deployer.address);
    });
  });

  describe("Occasions", () => {
    it("updates occasions count", async () => {
      const totalOccasions = await tokenMaster.totalOccasions();
      expect(totalOccasions).to.be.equal(1);
    });
  });
});
