// cluster inbuilt module hai jo node js ke traffic ko distribute karne ke liye use kiya jata hai ..
// cluster inbuilt module hai to ise install karne ki jarurat nhi hoti hai keval require kar sakte hai ...


const cluster = require('cluster');
const os =  require('os');
const express = require('express');

const app = express();
const port = 4000;

////  yaha se cpu ke core pata chal jayege ki cpu ke core kitne hai 4 ya 8  vo isliye kyoki jitne core ka hamara cpu hoga server hamra utni hi baar run hoga ...

const numcpu = os.cpus().length;
console.log(numcpu)


//  yaha par do method hoti hai cluster.isPrimary   or   cluster.Master  
if(cluster.isPrimary){
    for(let i = 0; i<numcpu; i++){
        cluster.fork()
    }
}
else{
    app.get("/getdata", (req, res)=>{
        res.send(`hello ${process.pid}`)
    })
    
    app.listen(port, ()=>{
        console.log(`server is running on ${port} ${process.pid} port`)
    })
}

// this is my new code 