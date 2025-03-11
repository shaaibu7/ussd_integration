require("dotenv").config();
const africaStalkingData = require("africastalking");
const { ethers } = require('ethers');

const africaStalking = africaStalkingData({
    apiKey: "",
    username: 'sandbox',
})

const USSD_ABI = [
    "function updateUSSD() external",
    "function getPresentUSSD() external view returns(uint256)"
];

const ethProvider = new ethers.JsonRpcProvider(process.env.ETH_PROVIDER_URL);
const contractAddress = "0xC7192fd5f0CB5283496EdEB0b5E4304BBc63bC32";

const privateKey = process.env.PRIVATE_KEY;

const userWallet = new ethers.Wallet(privateKey, ethProvider);
const ussdContract = new ethers.Contract(contractAddress, USSD_ABI, userWallet);



exports.ussdAccess = async (req, res) => {
    const {sesionId, serviceCode, phoneNumber, text} = req.body;

    let response; 

    if(text == ''){
        response = 'CON Welcome to safiri \n 1. create an acccount \n 2. I have an account continue '
    }

    if(text == '1') {
        response = 'CON Choose account information you want to view \n 1. Account number \n 2. Account balance';

        const updateUSSD = await ussdContract.updateUSSD();

        await updateUSSD.wait();

        console.log(updateUSSD);
    }

    if(text == '1*1') {
        response = 'END Your account number is 0x1234'
    }

    if(text == '1*2') {
        response = 'END your balance is 12ETH'
    }

    if(text == '2') {

        const getUSSD = await ussdContract.updateUSSD();

        await getUSSD.wait();

        console.log(getUSSD);

        response = 'END Your phone number is ' + getUSSD
    }

    setTimeout(()=>{
        res.send(response)
        res.end()
    }, 2000)
    

    
}

module.exports = exports;