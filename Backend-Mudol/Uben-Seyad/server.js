const express = require("express");
const app= express()

let posts = [
    {id: 1, title:'post 1'},
    {id: 2, title:'post 2'},
    {id: 3, title:'post 3'},
    {id: 4, title:'post 4'},
    {id: 5, title:'post 5'},
]

app.get('/', (req,res)=>{
res.send('hi')

})

// GET      --->    get data
// post     --->    create data
// Delete   --->    delete  data 
// Put      --->    update data 

app.listen(5000)