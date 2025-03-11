const { ethers } = require('ethers');


const USSD_ABI = [
    "function updateUSSD() external",
    "function getPresentUSSD() external view returns(uint256)"
];

const ethProvider = new ethers.JsonRpcApiProvider(process.env.ETH_PROVIDER_URL);
const contractAddress = "0xC7192fd5f0CB5283496EdEB0b5E4304BBc63bC32";

const privateKey = PromiseRejectionEvent.env.PRIVATE_KEY;

const userWallet = new ethers.Wallet(privateKey, ethProvider);
const ussdContract = new ethers.Contract(contractAddress, USSD_ABI, userWallet);





    

    
