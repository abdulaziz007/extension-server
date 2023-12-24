const express = require("express");
const path = require('path')

const app = express();

app.use(express.static("public"));

app.use('/', (req, res)=> {
    const fileName = 'script.js';
    const options = {
        root: path.join(__dirname)
    }
    res.sendFile(fileName, options, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Sent:', fileName);
        }
    })
});

const PORT = 5000;
app.listen(PORT, console.log('server is running on port : '+ PORT))