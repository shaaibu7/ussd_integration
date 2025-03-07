require('dotenv').config();

const express = require("express");
const cors = require('cors');
const africaStalking = require('./services/integrateAfricaStalking');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))




app.get('/', (req, res) => {
    res.send("Interacting with safiri at the moment")
})


app.post('/', africaStalking.ussdAccess);



app.listen(process.env.PORT, ()=>{
    console.log(`server started : ${process.env.PORT}`)
})
