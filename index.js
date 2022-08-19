const path = require('path');
const express = require('express')
const app = express()
app.use(express.static(path.join(__dirname, "browser")));
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.listen(3000)