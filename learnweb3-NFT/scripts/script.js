const { ethers } = require("hardhat");

async function main() {
  const contractFactory = await ethers.getContractFactory("PavithranNFT");

  const deployedContract = await contractFactory.deploy();

  await deployedContract.deployed();

  console.log("Contract deployed address is: ", deployedContract.address);
  //deployed address : 0x49D492313fd9c81340bF4E63e996692eC3f4561B
}

main(() => {
  console.log("process", process);
  process.exit(0);
}).catch((error) => {
  console.log(error, "error");
  console.log("process", process);
  process.exit(1);
});
