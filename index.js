const express = require('express');

const app=  express();

let port = 4000

app.get("/getdata", (req, res)=>{
    res.send(`hello ${process.pid}`)
})

app.listen(port, ()=>{
    console.log(`server is running on ${port} port`)
})