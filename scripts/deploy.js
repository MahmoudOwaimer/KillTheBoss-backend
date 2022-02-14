const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('KillTheBoss');
  const gameContract = await gameContractFactory.deploy(                     
    ["Cow", "Monkey", "Dog", "Wolf", "Lion"],       // Names
    [
      "https://image.shutterstock.com/image-vector/cow-head-artwork-illustration-glow-600w-1517650835.jpg",
      "https://image.shutterstock.com/image-vector/monkey-artwork-glow-dark-600w-1517951807.jpg",
      "https://image.shutterstock.com/image-vector/glow-color-gradation-ethnic-dog-600w-1518846761.jpg",
      "https://image.shutterstock.com/image-vector/wolf-head-color-glowing-artwork-600w-1517648312.jpg",
      "https://image.shutterstock.com/image-vector/glow-color-lion-head-artwork-600w-1517955278.jpg"
    ],
    [100, 200, 300, 400, 500],                    // HP values
    [10, 25, 50, 75, 90]                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  
  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #4");

  console.log("Done deploying and minting!");

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
