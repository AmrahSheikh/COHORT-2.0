/*
=>server create karna
=>server ko config karna
*/ 

const express = require("express")


const app = express() // server create ho jata hai 

app.use(express.json())

const notes = [
    // {
    //     title:"test title 1",
    //     description:"test description1"
    // }
]


app.get("/",(req,res)=>{
    res.send("Hello, Kaise ho Aap")
})

//POST/notes
app.post("/notes",(req,res)=>{
    console.log(
        req.body
    );
    notes.push(req.body)

    console.log(notes)
    res.send("note created")
    
})

//GET/notes
app.get("/notes",(req,res)=>{
    res.send(notes)
})

//DELETE/notes
//params
//delete/notes/2(<=index)
app.delete("/notes/:index",(req,res)=>{
   
    delete notes[req.params.index]
    res.send("notes deleted successfully")
})

//PATCH/notes/:index
//req.bosy = {description :- "sample modified description"}
app.patch("/notes/:index",(req,res)=>{

    notes[req.params.index].description = req.body.description
    notes[req.params.inndex].title = req.body.title
    res.send("notes updated successfully")
})

module.exports = app