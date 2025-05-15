require('dotenv').config()
const express = require('express')// like importing
const app = express()
const port = 3000
// we can run this file by using node index.js command but we will do something differnt, we have craeted a script function in .json file in which start represents teh same and as w e do npm run start(just like for react npm run dev), the file will run
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("Aditya")
})
// if we write any new function we have to restart the server so to fix this certain packages are there
app.get('/login',(req,res)=>{
    res.send('<h1>Login krle</h1>')
})
app.get('/youtube',(req,res)=>{
  res.send('<h1>Login krle</h1>')
})

app.get('/google',(req,res)=>{
  res.send('<h1>Login krle</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

