const express = require('express');
const app = express();
const { lookup } = require('geoip-lite');
const PORT = 8000 || process.env.PORT 

app.get("/",(req, res)=>{
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    // console.log(ip); // ip address of the user
    // console.log(lookup(ip)); // location of the user
    return res.send(lookup(ip))
})

app.listen(PORT)