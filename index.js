const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const db = require("./config/db")
const consign = require("consign")


consign()
    .include("./config/passport.js")
    .then("./config/middlewares.js")
    .then("./api")
    .then("./config/routes.js")
    .into(app)

app.db = db
app.use(bodyParser.json())

app.get("/", (req,res,next) =>{
    console.log("func 0")
    next()
})

app.post("/blabla/", (req,res) =>{
    console.log("func 1")
    res.status(200).send(`Nome: ${req.body.nome}\n Sobrenome: ${req.body.sobrenome}`)
})

app.listen(3000,() =>{
    console.log("Backend executando....")
})