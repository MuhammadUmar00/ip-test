const express = require('express');
const PORT = 8000 | process.env.PORT
const app = express();

app.get("/",(req, res)=>{
    return res.send(req.connection.remoteAddress)
})

app.listen(PORT,()=>{console.log(`server is running on ${PORT}`);})