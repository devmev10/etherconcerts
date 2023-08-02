const { expect } = require("chai");

describe("TokenMaster", () => {
  describe("Deployment", () => {
    it("Sets the name", async () => {
      const TokenMaster = await ethers.getContractFactory("TokenMaster");
      let tokenMaster = await TokenMaster.deploy("TokenMaster", "TM");
      let name = await tokenMaster.name();
      expect(name).to.equal("TokenMaster");
    });
  });
});
