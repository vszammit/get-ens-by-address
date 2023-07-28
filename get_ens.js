// Import necessary modules
const { Alchemy, Network } = require("alchemy-sdk");
require('dotenv').config();

const config = {
    apiKey: process.env.API_KEY,
    network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {
    // Provided below is a sample address
    // Configure accordingly
    const walletAddress = "0x458d1E307CcA61C0Bea82f7663F66831175EcDe8"; // replace with own wallet address
    const ensContractAddress = "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85"; // replace with own address

    const nfts = await alchemy.nft.getNftsForOwner(walletAddress, {
    contractAddresses: [ensContractAddress],
    });

    // Print NFT details
    // Refer to https://docs.alchemy.com/reference/getnfts to print more fields
    nfts.ownedNfts.forEach((nft) => {
        console.log("Title:", nft.title);
        console.log("Description", nft.description)
        console.log("Token ID:", nft.tokenId);
        console.log("Token Type:", nft.tokenType);
        console.log("----------------------------------");
    });
};

/**
 * Function to run the main function and handle any errors.
 * Executes the main function, exits the process with a success code if successful,
 * logs the error to the console and exits with an error code if an error occurs.
 */
const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error;
      process.exit(1);
    }
  };
  
  runMain(); // Run the main function