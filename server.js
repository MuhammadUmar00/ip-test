const express = require('express');
const lookup = require('geoip-lite');
const PORT = 8000 | process.env.PORT 
const app = express();

app.get("/",(req, res)=>{
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    // console.log(ip); // ip address of the user
    // console.log(lookup(ip)); // location of the user
    return res.send(lookup(ip))
})

app.listen(PORT,()=>{console.log(`server is running on ${PORT}`);})