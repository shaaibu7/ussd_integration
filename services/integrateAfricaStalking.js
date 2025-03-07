require("dotenv").config();
const africaStalkingData = require("africastalking");

const africaStalking = africaStalkingData({
    apiKey: "",
    username: 'sandbox',
})


exports.ussdAccess = async (req, res) => {
    const {sesionId, serviceCode, phoneNumber, text} = req.body;

    let response; 

    if(text == ''){
        response = 'CON Welcome to safiri \n 1. create an acccount \n 2. I have an account continue '
    }

    if(text == '1') {
        response = 'CON Choose account information you want to view \n 1. Account number \n 2. Account balance';
    }

    if(text == '1*1') {
        response = 'END Your account number is 0x1234'
    }

    if(text == '1*2') {
        response = 'END your balance is 12ETH'
    }

    if(text == '2') {
        response = 'END Your phone number is ' + phoneNumber
    }

    setTimeout(()=>{
        res.send(response)
        res.end()
    }, 2000)
    

    
}

module.exports = exports;