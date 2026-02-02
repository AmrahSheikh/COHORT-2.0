const express = require("express")

const app = express() // server intsans create karna

app.get('/',(req,res) => {
    res.send("Hello Sir")
})

app.get ('/about', function(req,res){
    res.send("This is about page")
})

app.get("/home",(req,res)=>{
    res.send("This is Home Page")
})

app.listen(3000) //server start karna