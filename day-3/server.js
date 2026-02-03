const express = require("express")

const app = express()


app.use(express.json())

const notes = []

app.post("/notes", (req,res)=>{

    console.log(req.body)

    notes.push(req.body)

    res.send("note created")
})//post API methode se ham resource ko create karte hai 

app.get("/notes",(req,res)=>{
    res.send(notes)
})// get API methode se ham jo resources already server pr create ho chuke hai wo wapis se client side pe mangwate hai


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    
})